import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from './authActions'
import Messages from '../../components/Messages'
import Input from '../../components/Form/Input'

class Auth extends Component {

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="col-sm-4 col-sm-offset-4">
                        Por favor, faça o login.
                        <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                            <Field component={Input} type="text" name="username"
                                placeholder="Usuário" icon='envelope' />
                            <Field component={Input} type="password" name="password"
                                placeholder="Senha" icon='lock' />

                            <button type="submit"
                                className="btn btn-primary btn-block btn-flat">
                                Entrar
                        </button>
                        </form>
                        <Messages />
                    </div>
                </div>
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)