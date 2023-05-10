import React, { useState } from "react";
import styles from "./newComplaint.module.css";
import Wrapper from "../wrapper/wrapper";

const AddNewComplaint = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = () => {
    console.log("thank you for submitting your complaint");
  };

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateDiscription = (event) => {
    setDiscription(event.target.value);
  };

  const updateType = (event) => {
    setType(event.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setDiscription("");
    setType("");
  };

  return (
    <div className={styles.postPage}>
      <div className={styles.personalInformation}>
        <div>
          <p>Name: </p>
        </div>
        <div>
          <p>GPA: </p>
        </div>
        <div>
          <p>Faculty: </p>
        </div>
        <div>
          <p>Academic Advisor: </p>
        </div>
        <div>
          <p>Major: </p>
        </div>
        <div>
          <p>Cumulative Warnings: </p>
        </div>
      </div>
      <div className={styles.formSection}>
        <form
          name="complaint"
          className={styles.complaint}
          onSubmit={handleSubmit}
        >
          <label className={styles.title}>
            Subject:
            <input type="text" value={title} onChange={updateTitle} required />
          </label>

          <label className={styles.complaintType}>
            Specify the type of your complaint:
            <select value={type} onChange={updateType} required>
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value="Student Conduct">Student Conduct</option>
              <option value="Honor System">Honor System</option>
              <option value="Bias">Bias</option>
              <option value="Grade Dispute">Grade Dispute</option>
              <option value="Harrasment and Discrimination">
                Harrasment and Discrimination
              </option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className={styles.discription}>
            Discription:
            <textarea
              type="text"
              value={discription}
              onChange={updateDiscription}
              placeholder="Describe your problem here..."
              required
            >
              {" "}
            </textarea>
          </label>
          <div className={styles.btns}>
            <button
              type="reset"
              className={styles.resetBtn}
              onClick={resetForm}
            >
              Reset
            </button>
            <button type="submit" className={styles.submitBtn}>
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Wrapper(AddNewComplaint);
