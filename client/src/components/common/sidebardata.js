import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/about"
    },
    {
        title: "Contact Us",
        icon: <ContactPageIcon/>,
        link: "/contactUs"
    },
    {
        title: "New Complaint",
        icon: <AddCircleOutlineIcon/>,
        link: "/post"
    },
    {
        title: "logout",
        icon: <LogoutIcon />,
        link: "/"
    },
]