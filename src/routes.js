import React from 'react';
import { Redirect, Route, Switch } from 'react-router';


//import Login from './pages/Login'
import FlashVenda from './pages/caixas/flashVenda';
import Dashboard from './pages/dashboard';
export default function Routes() {

    return (
        <div className='content-wrapper'>
            <Switch>

                {/* Nessa situacao, o login aparece dentro do template
                 e os menus funcionam. Porem eu queria que o login aparecesse
                 fora do template. Ai implementei esse outro login usando redux
                 colocando o componente AuthOrApp para testar quem mostra no inicio  */}
                {/* <Route path='/' component={Login} exact />*/}
                
                <Route path='/' component={Dashboard} exact />
                <Route path="/caixas/flashVendas" component={FlashVenda} />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}   