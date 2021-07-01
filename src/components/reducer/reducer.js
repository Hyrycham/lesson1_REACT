// import {getUsers, getUser, getPost, getComments} from '../../srvices/API';
// import {useState} from "react";

export default function Reducer (state, action) {
    switch (action.type){
        case'SHOWSWITCH':
            return (state=action.payload) ;
        // case'SHOWCOMMENTS':
            // console.log(state,action.payload,action.type);
            // console.log(getComments(action.payload));
            // state =  getComments(action.payload).then(value =>value.data);
            //                  console.log(state)

                 // return state
       // return      state = ()=>{getComments(action.payload).then(value =>value)}


        default:
            return{...state};




    }
}
