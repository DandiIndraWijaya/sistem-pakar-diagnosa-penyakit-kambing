import React from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';

import Navbar from '../components/Navigation/navbar'

const Home = () =>{
    return (
        <div>
            <Navbar />
            <h2>Hello World</h2>
        </div>
    )
}

export default withRouter(Home);