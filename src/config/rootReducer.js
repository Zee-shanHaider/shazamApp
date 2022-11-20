import {combineReducers} from 'redux'
import { shazamReducer } from '../Store/reducers/shazamReducer';


export default combineReducers({
    shazam: shazamReducer
 
 });