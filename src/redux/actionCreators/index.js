import {ADD_TODOS, SET_LOADING_TRUE, SET_LOADING_FALSE, PUSH_NEW_TODO} from '../actionTypes'

export const setLoadingTrue=()=>({type:SET_LOADING_TRUE})
export const setLoadingFasle=()=>({type:SET_LOADING_FALSE})
export const pushNewTodo=(payload)=>({type:PUSH_NEW_TODO, payload})
export const addTodos=(payload)=>({type:ADD_TODOS, payload})
