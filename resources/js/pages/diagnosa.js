import React, { Component, useState, useEffect } from "react";
import MultiSearchSelect from "react-search-multi-select";
import {Link, withRouter, useHistory} from 'react-router-dom';
import Navbar from '../components/Navigation/navbar';
import axios from 'axios';


const Diagnosis = () => {
  const [gejala, setGejala] = useState([]);
  const [inputGejala, setInputGejala] = useState([]);

  const handleChange = (params) => {
    console.log(params)
    setInputGejala(params)
    // console.log(inputGejala);
  }

  const handleClick = () => {
    let inputGejalaString = inputGejala.toString();
    axios.post('/api/diagnosa',
      {
        inputGejala: inputGejalaString
      }
    )
    .then(response => {
      console.log(response);
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
          <button onClick={handleClick}>Diagnosa</button>
        </center>
    </div>
  )
}

export default withRouter(Diagnosis);