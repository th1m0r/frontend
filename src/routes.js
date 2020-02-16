import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import FlashVenda from './pages/caixas/flashVenda';
import Dashboard from './pages/dashboard';

export default function Routes() {

    return (
        <div className='content-wrapper'>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path="/caixas/flashVendas" component={FlashVenda} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}   