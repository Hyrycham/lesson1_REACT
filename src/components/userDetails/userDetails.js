import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../srvices/API";
import {useParams} from "react-router-dom"
export default function UserDetails (props) {
console.log(props);
    let {id}=useParams();
    let [user, setUser]=useState(null);
       useEffect( () => {
        getUser(id).then(value => setUser(value.data));
    },[id]);



// appFn(props.match.params.id);

    return(
        <div>

            {/*<div><b>ID:</b> {props.match.params.id}</div>*/}
            <div><b>ID:</b> {id}</div>
                      { (user &&<div> {user.name}: {JSON.stringify(user)} </div> ) ||<div> no information </div> }
        </div>
    )
}


