import './App.css';
import Users  from './components/users/users';
import Menu  from './components/menu/menu';
import {getUsers,getUser,getPost} from './srvices/API';
import {useEffect, useState} from "react";
import Posts from "./components/posts/posts";

export default App
function App() {

let [user, setUser]=useState(null);
let appFn = (id) => {getUser(id).then(value => setUser(value.data))};

    let [post, setPost]=useState([]);
    let appFnPost = (id) => {getPost(id).then(value => setPost(value.data))};


    let [users, setUsers]= useState([]);
    useEffect( () => {
        getUsers().then(value => setUsers(value.data));
    },[]);

  return (
      <div>

          < Menu  pages={['Users', 'Posts' , 'Comments']}
                 classes= {['tr','point']}  />
<div className={'wrap'}>
<div className={'itemUsers centrcentr'}>
    <Users items={users} appFn={appFn}  appFnPost={appFnPost} />
</div>

    <div className={'usersInfo centrcentr'}>
           { (user &&<div> {user.username} {JSON.stringify(user)} </div> ) ||<div> no information </div> }
    </div>

    <div className={'usersPosts centrcentr'}>
        <Posts items={post}  />
    </div>


</div>


          < Menu  pages={['About', 'Team' , 'Contact']}
                  classes= {['target','point']} />
      </div>
  );

}


