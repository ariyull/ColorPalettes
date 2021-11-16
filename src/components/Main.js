import React, { useState, useEffect  } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Form from './FormTest'
import ColFamBlue from './ColFamBlue'
import ColFamBrown from './ColFamBrown'
import ColFamBlack from './ColFamBlack'
import ColFamGreen from './ColFamGreen'
import ColFamRed from './ColFamRed'
import ColFamYellow from './ColFamYellow'
import ColFamWhite from './ColFamWhite'
import ColFamViolet from './ColFamViolet'
import ColFamOrange from './ColFamOrange'
import ColFamGray from './ColFamGray'
import ColFamPink from './ColFamPink'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


function Main() {
    
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path = '/home' component= {Home} />
                    <Route path = '/form' component= {Form} />
                    <Route path = '/colfamblue' component= {ColFamBlue} />
                    <Route path = '/colfambrown' component= {ColFamBrown} />
                    <Route path = '/colfamblack' component= {ColFamBlack} />
                    <Route path = '/colfamgreen' component= {ColFamGreen} />
                    <Route path = '/colfamred' component= {ColFamRed} />
                    <Route path = '/colfamyellow' component= {ColFamYellow} />
                    <Route path = '/colfamwhite' component= {ColFamWhite} />
                    <Route path = '/colfamviolet' component= {ColFamViolet} />
                    <Route path = '/colfamorange' component= {ColFamOrange} />
                    <Route path = '/colfamgray' component= {ColFamGray} />
                    <Route path = '/colfampink' component= {ColFamPink} />
                    <Redirect to='/home' />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
};

export default Main
