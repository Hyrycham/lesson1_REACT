import {getUsers, getUser, getPost, getComments} from '../../srvices/API';

export default function Reducer (state, action) {
    switch (action.type){
        case'SHOWSWITCH':
            return (state=action.payload) ;
        case'SHOWCOMMENTS':

                        return   {...state}


        default:
            return{...state};




    }
}
