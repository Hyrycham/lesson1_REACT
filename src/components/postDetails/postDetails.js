import {useEffect, useState} from "react";
import {getPost} from "../../srvices/API";
import {useParams} from "react-router-dom"
// import Divisor from "../divisor/divisor";

export default function PostDetails (props) {
        let {id}=useParams();
                 let [post, setPost]=useState([]);
    useEffect( () => {
        getPost(id).then(value => (setPost(value.data)));
    },[id])
    return(
          <div>
              {
                  // post.map((value,index) => <Divisor  key ={index} items={value} />  )

                  post.map((value,index) => <div className={'FullPosts'} key ={index} >

                      <div className={'itemTitle'}><b>PostsID:</b> {value.id}  </div>
                      <div className={'itemBody'}> <b>UserID:</b> {value.userId}  </div>
                      <div className={'itemTitle'}><b>Title:</b> {value.title}  </div>
                      <div className={'itemBody'}> <b>Posts body:</b> {value.body}  </div>


                  </div>  )



              }
        </div>
    )
}


