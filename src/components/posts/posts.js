import {useEffect, useState} from "react";
import Post from '../post/post';

export default function Posts () {

    let [postsArray, setPostsArray]= useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromserver =>{
                setPostsArray(postsFromserver)   ;
            });
    } , [] )

    return(
        <div>
            {
                postsArray.map(post => <Post item={post}/>  )

            }
        </div>
    )
}