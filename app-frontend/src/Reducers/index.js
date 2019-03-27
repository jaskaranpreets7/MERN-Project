import { combineReducers } from 'redux';
import fetchPersons from './personReducer'

export default combineReducers({
    persons: fetchPersons
});