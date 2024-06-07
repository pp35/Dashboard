import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, ArrowDropDown, Person, People, Receipt, ExitToApp } from '@mui/icons-material';
import img from "../assets/rack extension.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className=" p-0 m-0 ">
      <div className="container mx-auto px-9 flex justify-between items-center">
        
          <img src={img} alt="Logo" className="p-1  h-16" /> 
     
        <div className="space-x-10  flex items-center">
          <a href="#home" className="text-black hover:text-gray-400 text-xl font-bold">Dashboard</a>
          <a href="#about" className="text-black hover:text-gray-400 text-xl font-bold">FAQs</a>
          <a href="#services" className="text-black hover:text-gray-400 text-xl font-bold">Support</a>
          
          <div className="relative inline-block text-left">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              
              style={{
                color: 'blue',
                border: '1px solid blue',
                borderRadius: '50px',
                padding: '5px'
              }}
            >
              <AccountCircle />
              <ArrowDropDown />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom', 
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Person style={{ color: '#2196F3' }} /> 
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <People style={{ color: '#4CAF50' }} /> 
                </ListItemIcon>
                <ListItemText primary="My Friends" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <Receipt style={{ color: '#FF9800' }} /> 
                </ListItemIcon>
                <ListItemText primary="My Transactions" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <ExitToApp style={{ color: '#F44336' }} /> 
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
