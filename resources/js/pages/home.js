import React from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/Navigation/navbar'

const StyledButton = styled.button`
    padding: 50px;
    margin: 20px;
    &:hover{
        cursor: pointer;
    }
`;

const Home = () =>{
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '100px' }}>
                <center>
                    <Link to="/diagnosis">
                    <StyledButton>
                        <h1>Diagnosa Kambing Anda</h1>
                    </StyledButton>
                    </Link>
                   
                    <br />
                    <StyledButton>
                        <h1>Tentang Kambing</h1>
                    </StyledButton>
                    <br />
                    <StyledButton>
                        <h1>Penyakit Kambing</h1>
                    </StyledButton>
                </center>
            </div>
        </div>
    )
}

export default withRouter(Home);