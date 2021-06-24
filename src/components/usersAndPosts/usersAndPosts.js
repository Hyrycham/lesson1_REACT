import {useEffect, useState} from "react";
// import UserAndPosts from '../user/user';
export default function UserAndPosts () {

    let [usersArray, setUsersArray]= useState([]);
    let [PostsArray, setPostsArray]= useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromserver =>{
                setUsersArray(usersFromserver)   ;
            });
    } , [] )

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromserver =>{
                setPostsArray(postsFromserver)   ;
            });
    } , [] )


    return(
        <div>

               <div>{usersArray.map(user => <User item={user}/>  )}</div> ;
            <div>{PostsArray.map(post => <Post item={post}/>)}</div>;

            <div>{PostsArray.map(post => <Post item={post}/>)}</div>;

        </div>
    )
}