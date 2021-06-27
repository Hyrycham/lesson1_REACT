import './App.css';
 import Users  from './components/users/users';
import Menu  from './components/menu/menu';
import {getUsers} from './srvices/API';
import {useEffect, useState} from "react";

export default App
function App() {

    let [users, setUsers]= useState([]);
    useEffect( () => {
        getUsers().then(value => setUsers(value.data));
    },[]);


  return (

      <div>

          < Menu  pages={['users page', 'posts page' , 'comments page']}
                 classes= {['tr','point']}
          />

<Users items={users}/>


          < Menu  pages={['about', 'team' , 'contact']}
                  classes= {['target','point','asd']}
          />

      </div>
  );
}


