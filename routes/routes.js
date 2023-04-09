const express = require("express");
const Complaint = require("../models/model");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const students = require('../dataGenerator'); // Import the student dataset module


//Post Method
router.post("/post", async (req, res) => {
  console.log(req.body); // Debugging line to check if the request body is received correctly
  try {
    // Create a new Complaint document with the fields from the request body
    const complaint = new Complaint({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      student_id: req.body.student_id,
    });

    // Save the new Complaint document to the database
    const savedComplaint = await complaint.save();

    // Return a success response with the saved Complaint document
    res.status(201).json(savedComplaint);
  } catch (error) {
    // Handle any errors and return an error response
    res.status(400).json({ message: error.message });
  }
});

//Get all Method | if category not specified, retrievel all complaints
router.get("/getAll", async (req, res) => {
  const category = req.query.category; // get category from query parameter
  let complaints;
  try {
    if (category) {
      // if category is specified, filter by category
      complaints = await Model.find({ category: category });
    } else {
      // if category is not specified, get all complaints
      complaints = await Model.find();
    }
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get complaints filtered by student id
router.get("/getByStudentId/:studentId", async (req, res) => {
  try {
    const complaints = await Complaint.find({
      student_id: req.params.studentId,
    });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//filter complaints by date range
router.get("/complaintsByDate", async (req, res) => {
  try {
    const startDate = new Date(req.query.start_date);
    const endDate = new Date(req.query.end_date);
    const complaints = await Complaint.find({
      date_filed: {
        $gte: startDate,
        $lte: endDate,
      },
    });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//filter by status
router.get("/complaints/status/:status", async (req, res) => {
  try {
    const complaints = await Complaint.find({ status: req.params.status });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//implement search field
router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.q;

    const complaints = await Complaint.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//implement pagination
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // default to page 1 and 10 complaints per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const complaints = await Complaint.find()
      .sort({ date_filed: -1 }) // sort by most recent complaints first
      .skip(startIndex)
      .limit(limit);

    const totalComplaints = await Complaint.countDocuments();

    res.json({
      totalComplaints,
      currentPage: page,
      totalPages: Math.ceil(totalComplaints / limit),
      complaints: complaints,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//implement export data
/** your code goes here */


//get mock dataset
router.get('/students', (req, res) => {
  res.json(students); // Use the exported data in your route
});

// Define a catch-all route for non-existing paths
router.get("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = router;




//Get by ID Method | this one may not be needed
// router.get('/getOne/:id', async (req, res) => {
//     try {
//         const complaint = await Model.findById(new ObjectId(req.params.id));
//         res.json(complaint)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

//Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// //Delete by ID Method
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const complaint = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.title} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })
