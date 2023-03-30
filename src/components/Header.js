import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons, }) => {
    const history =  new useHistory();
    const token = localStorage.getItem("token");
    const routeToLogin =()=>{
      history.push('/login');
    }

    const routeToRegitser =()=>{
      history.push('/register');
    }

    const routeToExplore =()=>{
      history.push('/');
    }

    const routeToLogout =()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('balance')
      history.push('/');
      window.location.reload();
    }

    if(hasHiddenAuthButtons){
      return (
        <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={routeToExplore}
        >
           Back to explore
        </Button>
        </Box>
       );
    }

    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Stack direction="row" alignItems="center" spacing={1}>
          {token ? (
          <>
            <Avatar src="avatar.png" alt={localStorage.getItem('username') || "profile"} />

            <p  className="username-text">{" "}{localStorage.getItem('username')}</p>
            <Button className="button" variant="contained" onClick={routeToLogout}>Logout</Button>
          </>
          )
          : (
          <>
            <Button onClick={routeToLogin}>Login</Button>
            <Button className="button" variant="contained" onClick={routeToRegitser}> Register</Button>
          </>
          ) 
          }
        </Stack>
      </Box>
    );
};

export default Header;
