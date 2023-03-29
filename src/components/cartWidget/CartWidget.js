/* 
racfe export default
rafc export definido */

import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { BsCart4 } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { BsTruck } from "react-icons/bs"
import "./CartWidget.css"
import { theme } from "../../temas/colorMui"
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
    color: "white"
  },
}));

export const CartWidget = () => {
const {cart} = useContext(CartContext)
  return (
    <div className="container-cart">
      <FaUserCircle
        style={{
          fontSize: "2rem",
          color: "#f58d86"
        }}
      // size={30} 
      // color={"#f58d86"}
      />
      <BsTruck
        style={{
          fontSize: "2rem",
          color: "#f58d86"
        }}
      />
      
      <Link to= "/Cart">
        <BsCart4
          style={{
            fontSize: "2rem",
            color: "#f58d86"
          }}
        />
        <ThemeProvider theme={theme}>
          <StyledBadge badgeContent={cart.length} color="primary" >
          </StyledBadge>
        </ThemeProvider>
      </Link>


    </div>

  )
}

