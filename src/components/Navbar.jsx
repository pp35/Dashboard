import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, ArrowDropDown, Person, People, Receipt, ExitToApp } from '@mui/icons-material';
import img from "../assets/rack extension.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-0 m-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <img src={img} alt="Logo" className="p-1 h-12 sm:h-16" />
        <div className="hidden md:flex space-x-9 ml-auto  ">
          <a href="#home" className="text-black hover:text-gray-400 text-xl font-bold">Dashboard</a>
          <a href="#about" className="text-black hover:text-gray-400 text-xl font-bold">FAQs</a>
          <a href="#services" className="text-black hover:text-gray-400 text-xl font-bold">Support</a>
        </div>
        <div className="flex md:hidden">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMobileMenuToggle}
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
        </div>
        <div className="hidden md:inline-block text-left">
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <a href="#home" className="block text-black hover:text-gray-400 text-xl font-bold py-2">Dashboard</a>
          <a href="#about" className="block text-black hover:text-gray-400 text-xl font-bold py-2">FAQs</a>
          <a href="#services" className="block text-black hover:text-gray-400 text-xl font-bold py-2">Support</a>
          <div className="border-t border-gray-200">
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
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
