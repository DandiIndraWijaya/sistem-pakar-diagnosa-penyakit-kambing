import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter, useHistory} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledLogo = styled.span`
    margin: 20px;
    font-weight: bold;
    font-size: 20px;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

const Navbar = () => {
    return (
      <div>
        <AppBar style={{ background: `linear-gradient(105deg, #17172b, #ffffff)` }} position="fixed">
                <ToolBar >
                    <StyledLogo >
                        Diagnosa Penyakit Kambing
                    </StyledLogo>
                </ToolBar>
          </AppBar>
      </div>
            
    )
}

export default Navbar;