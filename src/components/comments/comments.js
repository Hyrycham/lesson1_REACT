import {useEffect, useState} from "react";
import Comment from '../comments/comment';
export default function Comments () {

    let [commentsArray, setCommentsArray]= useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromserver =>{
                setCommentsArray(commentsFromserver)   ;
            });
    } , [] )

    return(
        <div>
            {
                commentsArray.map(comment => <Comment item={comment}/>  )
            }
        </div>
    )
}