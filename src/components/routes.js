import React, { useContext, useEffect, Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Header from 'components/header';

const Home = lazy(() => import('components/home'));

const Routes = (props) => {

    return (
        <BrowserRouter>
            <Header {...props}/>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path="/" render = {()=><Home />} exact/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;