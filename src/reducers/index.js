import {combineReducers} from 'redux';
import OptionReducer from './reducer-options';
import ActiveOptionReducer from './reducer-active-option';

const allReducers = combineReducers({
    options: OptionReducer,
    activeOption: ActiveOptionReducer
});

export default allReducers;
