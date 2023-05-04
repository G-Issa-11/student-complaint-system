import React, { useState } from 'react';
import styles from './sidebar.module.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {SidebarData} from './sidebardata'


const Home = () => {
  /**window.location.pathname = val.link*/
  return (

    <div className={styles.sidebar}>
        <ul className={styles.sidebarList} >
        {SidebarData.map((val, key) => {
            return (
                <li className = {val.title != "logout" ? styles.sidebarItem: [styles.sidebarItem, styles.bottom, styles['d-flex-c']].join(' ')} key={key} onClick={console.log("you clicked me") }>
                    <div className={styles.icon}>{val.icon}</div>
                    <div className={styles.title}>{val.title}</div>
                </li>
            )
        })}
        </ul>
    </div>
  );
};

export default Home;
