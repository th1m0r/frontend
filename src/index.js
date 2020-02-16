import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

//import App from './app';
import AuthOrApp from './pages/Login/authOrApp';
import reducers from './store/reducers';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);


ReactDOM.render(

    <Provider store={store}>
        {/* Se eu iniciar a aplicacao assim tudo funciona normalmente
        porem o login fica dentro do template. Eu quero que o Login fique com outro
        estilo e so depois de logar apareca o template do admin-lte  */}
        {/* <App/> */}

        <AuthOrApp />
    </Provider>
    , document.getElementById('root')

);