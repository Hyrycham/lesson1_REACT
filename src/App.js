import './App.css';
 import Users  from './components/users/users';
import Menu  from './components/menu/menu';
import {getUsers,getUser} from './srvices/API';
import {useEffect, useState} from "react";

export default App
function App() {
let [user, setUser]=useState(null)
    let appFn = (id) => {getUser(id).then(value => setUser(value.data))};

    let [users, setUsers]= useState([]);
    useEffect( () => {
        getUsers().then(value => setUsers(value.data));
    },[]);


  return (
      <div>

          < Menu  pages={['users page', 'posts page' , 'comments page']}
                 classes= {['tr','point']}  />

<Users items={users} appFn={appFn}  />
<hr/>




              { user && <div> {user.name} {JSON.stringify(user)} </div>}





          < Menu  pages={['about', 'team' , 'contact']}
                  classes= {['target','point','asd']} />

      </div>
  );

}


