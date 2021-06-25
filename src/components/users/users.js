import {useEffect, useState} from "react";
import User from "../user/user";
export default function Users () {

    let [users, setUsers]= useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(usersFromserver =>{
            setUsers(usersFromserver)   ;
        });
    } , [] )

    return(
        <div>
            {
                users.map(value => <User item={value}/>  )
            }
        </div>
    )
}