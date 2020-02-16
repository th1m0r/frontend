import api from './api'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN_KEY = "@Token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);

class Auth {

    executeJwtAuthenticationService(username, password) {
        return api.post('/authenticate', {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        //this.setupAxiosInterceptors(token)
        localStorage.setItem(TOKEN_KEY, token);
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }


    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        localStorage.removeItem(TOKEN_KEY)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        api.interceptors.request.use (
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = this.createJWTToken(token)
                }
                return config
            }
        )
    }
}

export default new Auth()