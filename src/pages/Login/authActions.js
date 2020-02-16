import { toastr } from 'react-redux-toastr'

import api from '../../services/api'

export function login(values) {
    return submit(values, '/authenticate')
}

function submit(values, url) {
    return dispatch => {
        api.post(url, values)
            .then(resp => {
                console.log(resp.data)
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data.token }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            api.post('/validateToken', { token })
                .then(resp => {
                    console.log(resp.data)
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}