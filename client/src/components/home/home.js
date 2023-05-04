import React, { useState } from 'react';
import styles from './home.module.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Sidebar from '../common/sidebar';


const Home = () => {
 
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Home;
