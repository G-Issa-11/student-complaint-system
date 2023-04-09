const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  student_id: {
    //type: mongoose.Schema.Types.ObjectId,
    type:String,
    ref: 'Student',
    required: true
  },
  date_filed: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    default: 'new'
  },
  notes: {
    type: String
  }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
