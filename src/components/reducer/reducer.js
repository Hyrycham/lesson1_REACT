
export default function Reducer (state, action) {
    switch (action.type){
        case'SHOWSWITCH':
            return (state=action.payload) ;

        default:
            return{...state};




    }
}
