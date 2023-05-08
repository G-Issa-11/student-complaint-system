import React, { useState } from 'react';
import styles from './contactUs.module.css';
import Wrapper from '../wrapper/wrapper';

const ContactPage = () => {
  return (
    <div className ={styles.contactUs}>
      <h1>This is my Contact page</h1>
    </div>
  );
};

export default Wrapper(ContactPage);
