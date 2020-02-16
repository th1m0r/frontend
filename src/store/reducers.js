import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import AuthReducer from '../pages/Login/authReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer