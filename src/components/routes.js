import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Home = lazy(() => import('components/home'));
const GetListed = lazy(() => import('components/get-listed'));
const Fsbo = lazy(() => import('components/fsbo'));
const ListingExpired = lazy(() => import('components/listing-expired'));
const Testimonials = lazy(() => import('components/testimonials'));
const Environment = lazy(() => import('components/environment'));


const Routes = (props) => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Header {...props}/>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/" render = {()=><Home />} exact/>
                        <Route path="/get-listed" render = {()=><GetListed />} exact/>
                        <Route path="/fsbo" render = {()=><Fsbo />} exact/>
                        <Route path="/listing-expired" render = {()=><ListingExpired />} exact/>
                        <Route path="/testimonials" render = {()=><Testimonials />} exact/>
                        <Route path="/environment" render = {()=><Environment />} exact/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer {...props}/>
        </React.Fragment>
    )
}

export default Routes;