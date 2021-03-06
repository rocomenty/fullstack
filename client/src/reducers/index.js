import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import { reducer as reduxForm } from 'redux-form';
import surveyReducer from './surveyReducer.js';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    survey: surveyReducer
});