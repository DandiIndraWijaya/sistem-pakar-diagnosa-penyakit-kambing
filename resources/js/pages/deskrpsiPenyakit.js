import React from 'react';
import Navbar from '../components/Navigation/navbar';
import styled from 'styled-components';
import {Link, withRouter, useHistory, useParams} from 'react-router-dom';

const StyledDeskripsiPenyakit = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px
`

const DeskripsiPenyakit = () => {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <StyledDeskripsiPenyakit>
                <center>
                    <h2>Diare pada Kambing</h2>
                </center>

                <p style={{ textAlign: 'justify' }}>
                Diare adalah penyakit yang membuat penderitanya menjadi sering buang air besar, dengan kondisi tinja yang encer. Pada umumnya, diare terjadi akibat makanan dan minuman yang terpapar virus, bakteri, atau parasit.
                </p>

                <p style={{ textAlign: 'justify' }}>
                Biasanya diare hanya berlangsung beberapa hari (akut), namun pada sebagian kasus dapat memanjang hingga berminggu-minggu (kronis). Pada umumnya, diare tidak berbahaya jika tidak terjadi dehidrasi. Namun, jika disertai dehidrasi, penyakit ini bisa menjadi fatal, dan penderitanya perlu segera mendapat pertolongan medis.
                </p>
            </StyledDeskripsiPenyakit>
        </div>
    )
}

export default withRouter(DeskripsiPenyakit);