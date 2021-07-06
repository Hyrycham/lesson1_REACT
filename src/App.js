import './App.css';
import Users  from './components/users/users';
import Menu  from './components/menu/menu';
import {getUsers, getUser, getPost, getComments} from './srvices/API';
import {useEffect, useState} from "react";
import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";
import Reducer from './components/reducer/reducer';
import {useReducer } from "react";
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'
import AppTest from "./components/testContext/appTest";

export default App
function App() {

//    ------------------------------------------
    let [user, setUser]=useState(null);
    let appFn = (id) => {getUser(id).then(value => setUser(value.data))};

    //---------------------------------------------------
    let [post, setPost]=useState([]);
    let appFnPost = (id) => {getPost(id).then(value => setPost(value.data))};
//---------------------------------------------------
    let [comments, setComments]=useState([]);
    let  appFnComments = (id)  =>{getComments(id).then(value => setComments(value.data))};


    //++++++++++++++++++++++++++++++++++++++++++++++++++++
    // let [show, setShow]=useState(['showOn','showOff']);
    // let   appShow = (s,t) => {s=setShow([s,t])}

    let   [show,appShow]= useReducer(Reducer,['showOn','showOff'])
//++++++++++++++++++++++++++++++++++++++++++++++++++++

    let [users, setUsers]= useState([]);
    useEffect( () => {
        getUsers().then(value => setUsers(value.data));
    },[]);
//===========================================================
// let appShowBtn=['showOn','showOn'];
    //================================
      return (
        <Router>

      <div>

          < Menu  pages={['Main', 'Info' , 'Call']}
                 classes= {['tr','point']}  />

          <div className={'GOTo CenT WrapColumn'}>
              <Link  to={'/users'}>go to users page</Link>

              <Link  to={'/posts'}>go to posts page</Link>

              <Link  to={'/comments'}>go to comments page</Link>

              <Link  to={'/testContext'}>go to TESTCONTEXT</Link>

              <Link  to={'/'}>go to HOME page</Link>


          </div>

          <Switch>

              {/*==============================================*/}

              <Route path={'/users/:id'} render={()=>
                  <div className={'wrap'}>

                      <div className={'usersInfo CenT'} >
                          {/*<div  className={show[0]}>*/}
                              <div >

                              {/*{ (user &&<div> {user.name} {user.username} {JSON.stringify(user)} </div> ) ||<div> no information </div> }*/}
                          </div>
                      </div>
                       </div>}
              />
          {/*============================*/}


              <Route path={'/users'} render={()=>
            <div className={'wrap'}>
            <div className={'itemUsers CenT'}>
            <Users items={users} appFn={appFn}  appFnPost={appFnPost}  appFnShow={appShow}  appShowBtn={['showOn','showOff']} />
        </div>
                <div className={'usersInfo CenT'} >
                    <div  className={'fixDiv70 '+show[0]}>
                        { (user &&<div> {user.name} {JSON.stringify(user)} </div> ) ||<div> no information </div> }
                    </div>
                </div>

            </div>}
        />

        <Route path={'/posts'} render={()=>
            <div className={'wrap'}>
                <div className={'itemUsers CenT '}>
                    <Users items={users} appFn={appFn}  appFnPost={appFnPost}  appFnShow={appShow} appShowBtn={['showOff','showOn']}   />
                </div>
                 <div className={'usersPostsFull CenT'}>
           { ( post[0] && <div> Posts of USER :{users[post[0].userId-1].name} </div> ) || <div> no information </div> }
            { ( post[0] && <div> with ID:{post[0].userId} </div> ) || <div> no information </div> }
            <div >
                <Posts items={post} appFnComments={appFnComments} appSh={appShow} appShowBtn={['showOff','']}  />
            </div>
            </div>
        </div>}
      />

    <Route path={'/comments'} >
        <div className={'wrap'}>
            <div className={'itemUsers CenT'}>
                <Users items={users} appFn={appFn}  appFnPost={appFnPost}  appFnShow={appShow}  appShowBtn={['showOff','showOn']}/>
            </div>
            <div className={'usersInfo CenT'} >
        <div className={'fixDiv40 '+ show[1] }>
            <Comments items={comments}  />
        </div>
            </div>
            <div className={'usersPosts CenT '}>
                { ( post[0] && <div> Posts of USER :{users[post[0].userId-1].name} </div> ) || <div> no information </div> }
                { ( post[0] && <div> with ID:{post[0].userId} </div> ) || <div> no information </div> }
                <div >
                    <Posts items={post} appFnComments={appFnComments} appSh={appShow} appShowBtn={['showOn','']} />
                </div>
            </div>

        </div>
    </Route>

              <Route  path={'/testContext'} render={()=><div >This is testContext

                  <AppTest />



              </div>} />

    <Route exact path={'/'} render={()=><div className={'linkHome wrap CenT'}>This is HOME page</div>} />


     </Switch>

          < Menu  pages={['About', 'Team' , 'Contact']}
                  classes= {['target','point']} />
      </div>
</Router>
    );

}


