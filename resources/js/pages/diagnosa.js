import React, { Component, useState } from "react";
import MultiSearchSelect from "react-search-multi-select";
import {Link, withRouter, useHistory} from 'react-router-dom';
import Navbar from '../components/Navigation/navbar';
import NavBar from '../components/Navigation/navbar';
import axios from 'axios';


const Diagnosis = () => {
  const [gejala, setGejala] = useState(["Allison","Arthur","Beryl","Chantal","Cristobal","Danielle","Dennis","Ernesto","Felix","Fay","Grace","Gaston","Gert","Gordon"]);
  const [inputGejala, setInputGejala] = useState([]);

  const handleChange = (params) => {
    setInputGejala(params)
    // console.log(inputGejala);
  }

  const handleClick = () => {
    let gejalaString = inputGejala.toString();
    axios.post('/api/diagnosa',
      {
        inputGejala: 'G001,G011,G023,G024,G025'
      }
    )
    .then(response => {
      console.log(response);
    })
  }

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