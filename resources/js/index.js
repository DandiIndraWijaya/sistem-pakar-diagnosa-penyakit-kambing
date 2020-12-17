import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Diagnosis from './pages/diagnosa';

const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Diagnosis} />
                <Route exact path="/diagnosis" component={Diagnosis} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('index'));