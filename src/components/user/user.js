import {useEffect, useState} from "react";
import Posts from "../posts/posts";


export default function User ({item}) {

    let [posts, setPosts]= useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+item.id +'/posts')
            .then(value => value.json())
            .then(value =>{
                setPosts(value)   ;
            });
    } , [] )


        return(
        <div>

         -----------   {item.name} - {item.id}------------
            < Posts items= {posts}/>
        </div>
    )


}




