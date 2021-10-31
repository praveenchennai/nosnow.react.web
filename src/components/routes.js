import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './header';

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
        </React.Fragment>
    )
}

export default Routes;