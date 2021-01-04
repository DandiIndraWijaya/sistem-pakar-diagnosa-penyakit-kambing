import React, { Component, useState, useEffect } from "react";
import MultiSearchSelect from "react-search-multi-select";
import {Link, withRouter, useHistory} from 'react-router-dom';
import Navbar from '../components/Navigation/navbar';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const StyledButton = styled.button`
  padding: 10px; 
  background-color: #17172b; 
  color: #ffff;
  border: unset;
  border-radius: 8px;
  &:hover{
    cursor: pointer;
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
})); 



const Diagnosis = () => {
  const classes = useStyles();
  const [gejala, setGejala] = useState([]);
  const [inputGejala, setInputGejala] = useState([]);
  const [open, setOpen] = useState(false);
  const [penyakit, setPenyakit] = useState(false);

  const handleChange = (params) => {
    setInputGejala(params)
    // console.log(inputGejala);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    let inputGejalaString = inputGejala.toString();
    axios.post('/api/diagnosa',
      {
        inputGejala: inputGejalaString
      }
    )
    .then(response => {
      console.log(response.data);
      setOpen(true)
      if(response.data !== false){
        setPenyakit(response.data);
      }else{
        setPenyakit(false);
      }
    })
  }

  useEffect(() => {
    axios.get('/api/gejala')
    .then(response => {
      // console.log(response.data);
      let array_gejala = [];
      let respon_gejala;
      response.data.map(g => {
        respon_gejala = g.kode_gejala + ' - ' + g.nama_gejala;
        array_gejala.push(respon_gejala);

        setGejala(array_gejala);
      });
    })
  }, []);
  

  return(
    <div>
        <Navbar />
        <div style={{  marginTop: '100px' }}>
          <center>
            <h4>Sayangi Kambing Anda :)</h4>
            <img width="150" src="https://image.freepik.com/free-vector/goat-cartoon-style_119631-178.jpg" />
          </center>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <MultiSearchSelect 
            searchable={true} 
            showTags={true} 
            multiSelect={true} width="800px" 
            onSelect={handleChange} 
            options={gejala}
            searchPlaceholder="Cari Gejala yang dialami kambing anda"
            secondaryColor="#17172b"
            />
        </div>
        </div>
       
        <center style={{ marginTop: '20px' }}>
          <StyledButton onClick={handleClick}>Diagnosa <br /> <LocalHospitalIcon /></StyledButton>
        </center>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              {
                penyakit != false &&
                <div>
                  <center>
                    <h3>{penyakit.nama_penyakit}</h3>
                    <hr />
                  </center>
                  <h4>Cara Menyembuhkan :</h4>
                  <h5>
                    {penyakit.cara_menyembuhkan}
                  </h5>
                </div>
                || 
                <center>Tidak ditemukan penyakit pada kambing anda atau mungkin kami kekurangan data jadi lebih baik periksakan pada dokter hewan.</center>
              }
            </div>
          </Fade>
        </Modal>
    </div>
  )
}

export default withRouter(Diagnosis);