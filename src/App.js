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

          < Menu  pages={['Users', 'Info' , 'Posts']}
                 classes= {['tr','point']}  />
<div className={'wrap'}>
<div className={'itemUsers CenT'}>
    <Users items={users} appFn={appFn}  appFnPost={appFnPost} />

</div>

    <div className={'usersInfo CenT'} >

<div  className={'fixDiv'}>
    { (user &&<div> {user.name} {JSON.stringify(user)} </div> ) ||<div> no information </div> }
</div>


    </div>

    <div className={'usersPosts CenT '}>

        { ( post[0] && <div> Posts of USER :{users[post[0].userId-1].name} </div> ) || <div> no information </div> }
        { ( post[0] && <div> with ID:{post[0].userId} </div> ) || <div> no information </div> }

        <div >

            <Posts items={post}  />
        </div>

    </div>

</div>


          < Menu  pages={['About', 'Team' , 'Contact']}
                  classes= {['target','point']} />
      </div>
  );

}


