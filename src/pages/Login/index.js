//import './index.css'

import React, { useState } from 'react';

import auth from '../../services/auth';
import logo from '../../assets/aratu.png';

export default function Login({ history }) {
    const [usuario, setUsuario] = useState({ username: '', password: '' });


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            auth
                .executeJwtAuthenticationService(usuario.username, usuario.password)
                .then((response) => {
                    auth.registerSuccessfulLoginForJwt(usuario.username, response.data.token)
                    history.push('/dashboard')
                }).catch((e) => {
                    console.log(e)
                    console.log("erro de login")
                })
        } catch (e) {
            console.log('Erro:', e);
        }
    }


    return (
        <div className="aw-layout-simple-page">
            <div className="aw-layout-simple-page__container">
                <form onSubmit={handleSubmit}>
                    <div className="aw-simple-panel">
                        <img src={logo} alt="Aratu app" style={{ width: 200 }} />
                        <div className="aw-simple-panel__message">
                            Por favor, faça o login.
                        </div>

                        <div className="aw-simple-panel__box">
                            <div className="form-group  has-feedback">
                                <input
                                    className="form-control  input-lg"
                                    type="text"
                                    placeholder="Digite o usuário"
                                    value={usuario.login}
                                    onChange={e => setUsuario({ ...usuario, username: e.target.value })} />
                                <span className="glyphicon  glyphicon-user  form-control-feedback"></span>
                            </div>
                            <div className="form-group  has-feedback">
                                <input
                                    className="form-control  input-lg"
                                    type="password"
                                    placeholder="Digite a senha"
                                    value={usuario.senha}
                                    onChange={e => setUsuario({ ...usuario, password: e.target.value })} />
                                <span className="glyphicon  glyphicon-lock  form-control-feedback" ></span>
                            </div>
                            <div className="form-group">
                                <button className="btn  btn-primary  btn-lg  aw-btn-full-width" type="submit">Entrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}