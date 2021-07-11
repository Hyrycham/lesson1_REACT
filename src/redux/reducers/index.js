import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import { todosReducer} from './ todosReducer';



export const rootReducer=combineReducers({
    counterReducer,
    todosReducer
})
{
    counterReducer:{value:0}
    todosReducer:{todo:[]}

}