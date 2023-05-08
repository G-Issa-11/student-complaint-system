import React, { useState } from 'react';
import styles from './sidebar.module.css';
import {SidebarData} from './sidebardata'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <ul className={styles.sidebarList} >
        {SidebarData.map((val, key) => {
            return (
                <li className = {val.title != "logout" ? styles.sidebarItem: [styles.sidebarItem, styles.bottom, styles['d-flex-c']].join(' ')} key={key} onClick={console.log("you clicked me") }>
                    <Link to={val.path} className={styles.sidebarLink} replace>
                      <div className={styles.icon}>{val.icon}</div>
                      <div className={styles.title}>{val.title}</div>
                    </Link>
                </li>
            )
        })}
        </ul>
    </div>
  );
};

export default Sidebar;
