import React from 'react';
import styles from './newComplaint.module.css'
import Wrapper from '../wrapper/wrapper';
const AddNewComplaint = () => {
 
    return (
      <div className={styles.postPage}>
        <h1>you can add a new Complaint from this page</h1>
      </div>
    );
  };
  
  export default Wrapper(AddNewComplaint);
  