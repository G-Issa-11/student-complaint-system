import React, { useState } from 'react';
import styles from './dashboard.module.css';
import Wrapper from '../wrapper/wrapper';

const Dashboard = () => {
  return (
    <div className ={styles.dashboard}>
      <h1>This is my dashboard</h1>
    </div>
  );
};

export default Wrapper(Dashboard);
