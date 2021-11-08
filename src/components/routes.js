import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Home = lazy(() => import('components/home'));

const Routes = (props) => {

    return (
        <React.Fragment>
            <Header {...props}/>
            <BrowserRouter>
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route path="/" render = {()=><Home />} exact/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Footer {...props}/>
        </React.Fragment>
    )
}

export default Routes;