import React, { useState } from 'react';
import styles from './home.module.css';
import Wrapper from '../wrapper/wrapper';

const Home = () => {
  return (
    <div className ={styles.home}>
      <h1>This is my home page</h1>
    </div>
  );
};

export default Wrapper(Home);
