import { combineReducers } from 'redux'
import Session from './Session'
import CreateUser from './CreateUser'
import GetStarted from './GetStarted';
import FindRideForm from './FindRide';
import ShareRideForm from './ShareRide';
import SessionCarForm from './SessionCarForm';

const rootReducer = combineReducers({ 
    session: Session,
    createUserForm: CreateUser,
    getStartedFlow: GetStarted,
    findRideForm: FindRideForm,
    shareRideForm: ShareRideForm,
    carForm: SessionCarForm
})

export default rootReducer
