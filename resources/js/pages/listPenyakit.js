import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navigation/navbar';
import styled from 'styled-components';
import {Link, withRouter, useHistory} from 'react-router-dom';
import axios from 'axios';

const StyledListPenyakit = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px
`;

const StyledPenyakit = styled.div`
    text-align: center;
    border-bottom: solid 1px gainsboro;
`;

const DeskripsiPenyakit = () => {
    const [listPenyakit, setListPenyakit] = useState([]);
    useEffect(() => {
        axios.get('/api/list_penyakit')
        .then(response => {
            setListPenyakit(response.data);
        })
    }, [])

    return (
        <div>
            <Navbar />
            <StyledListPenyakit>    
               {
                   listPenyakit.map((p, key) => {
                       return (
                           <Link to={`/deskripsi_penyakit/${p.id}`} key={key} style={{ textDecoration: 'none', color: 'black' }}>
                                <StyledPenyakit>
                                    <h3>{p.nama_penyakit}</h3>
                                </StyledPenyakit>
                           </Link>
                       )
                   })
               }
            </StyledListPenyakit>
        </div>
    )
}

export default withRouter(DeskripsiPenyakit);