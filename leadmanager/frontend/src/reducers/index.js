import { combineReducers } from 'redux'
import leads from './leads'
import errors from './errors'
import messages from './messages'
import auth from './auth'
import maps from './maps';

export default combineReducers({
    leads,
    errors,
    messages,
    auth,
    maps
});