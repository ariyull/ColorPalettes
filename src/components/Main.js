import React, { useState, useEffect  } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate 
  } from "react-router-dom";

import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Form from './FormTest'

function Main() {
    
    return (
        <div>
            <Header />
            <BrowserRouter basename="/">
                <Routes>
                    <Route path = '/' element= {<Home/>} />
                    <Route path = '/home' element= {<Home/>} />
                    <Route path = '/form' element= {<Form/>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default Main
