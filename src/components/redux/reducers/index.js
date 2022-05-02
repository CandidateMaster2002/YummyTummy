import {combineReducers} from 'redux';
import {itemReducer} from './itemReducer';

const reducers=combineReducers({
allitems:itemReducer,
})

export default reducers;
