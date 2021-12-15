import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Form from './Upload'
import Single from './Single'

class Main extends Component {
    
    render() {
    
    return (
        <div>
            <Header />
            <BrowserRouter basename="/">
                <Routes>
                    <Route path = '/' element= {<Home/>} />
                    <Route path = '/home' element= {<Home/>} />
                    <Route path = '/form' element= {<Form/>} />
                    <Route path = '/single' element= {<Single/>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )}
};

export default Main
