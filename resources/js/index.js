import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Diagnosis from './pages/diagnosa';
import DeskripsiPenyakit from './pages/deskrpsiPenyakit';
import listPenyakit from './pages/listPenyakit';

const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Diagnosis} />
                <Route exact path="/list_penyakit" component={listPenyakit} />
                <Route exact path="/deskripsi_penyakit/:id" component={DeskripsiPenyakit} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('index'));