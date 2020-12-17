import React, { Component, useState, useEffect } from "react";
import MultiSearchSelect from "react-search-multi-select";
import {Link, withRouter, useHistory} from 'react-router-dom';
import Navbar from '../components/Navigation/navbar';
import NavBar from '../components/Navigation/navbar';
import axios from 'axios';


const Diagnosis = () => {
  const [gejala, setGejala] = useState(["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]);
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
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="500px" onSelect={handleChange} options={gejala}/>
            
        </div>
        <center style={{ marginTop: '20px' }}>
          <button onClick={handleClick}>Diagnosa</button>
        </center>
    </div>
  )
}
  // class SearchBar extends React.Component {
  //   constructor(props) {
  //       super(props);
  //       this.state = {
  //         values: ["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]
  //       };

  //     }

  //     handleChange(params) {
  //       this.inputGejala = params;
  //       console.log(this.inputGejala);
  //     }
  //   //   handleChange = (arr) => {
  //   //     console.log(arr);
  //   //   }
  //     render() {
  //       return (
  //       <div>
  //           <div style={{display: 'flex', justifyContent: 'center'}}>
  //               <MultiSearchSelect searchable={true} showTags={true} multiSelect={true} width="500px" onSelect={this.handleChange} options={this.state.values}/>
  //           </div>
  //       </div>
  //       );
  //     }
  // }

export default withRouter(Diagnosis);