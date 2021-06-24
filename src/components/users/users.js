import {useEffect, useState} from "react";
import User from '../user/user';
export default function Users () {

    let [usersArray, setUsersArray]= useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(usersFromserver =>{
            setUsersArray(usersFromserver)   ;
        });
    } , [] )

    return(
        <div>
            {
                usersArray.map(user => <User item={user}/>  )
            }
        </div>
    )
}