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
import UserDetails from "./components/userDetails/userDetails";
import UserDetails2 from "./components/userDetails2/userDetails2";
import PostDetails from "./components/postDetails/postDetails";
import {useSelector, useDispatch} from "react-redux";

const SomeNestedComponent=()=>{
    // const counter=useSelector((state)=>state.counterValue);
    const counter=useSelector(({counterValue})=>counterValue);
    return(
        <div>
            <div className={'CenT  CounterBtnC Counter'} >
                <h2 className={' CenT'}>{counter}</h2>
            </div>
     </div>
   )
}

const SomeChildComponent=()=>{
    return(
        <SomeNestedComponent/>
    )
}
export default App
function App() {

// ===========================
    const postsR=useSelector((state)=>state.postsR );

    const dispatch=useDispatch()
const fetchPosts=async ()=>{
        const data= await (await fetch('https://jsonplaceholder.typicode.com/posts/')).json()
       dispatch({
        type:"SET_POSTS",
        payload:data
    })
    }

    useEffect(()=>{fetchPosts()},[])
    // ===========================
let  [incValue, setIncValue]= useState(0);
    function onSubmitInc(e){
               dispatch({type:'INCVALUE', payload:e.target.incValue.value })
               e.preventDefault()
           }

    function onIncChange(e){
        setIncValue(e.target.value);
    }
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

          <div className={'CenT CounterWrap'} >
<div className={'CenT CounterBtn'} >
    <button  className={' CenT CounterBtn'} onClick={()=>{dispatch({type:'INC'})}}> INC</button>
</div>
              <div className={'CenT CounterBtn'} >
                  <button  className={' CenT CounterBtn'} onClick={()=>{dispatch({type:'DEC'})}}> DEC</button>
              </div>
              <div className={'CenT CounterBtn'} >
                  <button  className={' CenT CounterBtn'} onClick={()=>{dispatch({type:'RESET'})}}> RESET</button>
              </div>

          <SomeChildComponent  />

              <div className={'CenT CounterBtn'} >
                  <button  className={' CenT CounterBtn'} onClick={()=>{dispatch({type:'INC10'})}}> +10 </button>
              </div>

              <div className={'CenT CounterBtn'} >
                  <button  className={' CenT CounterBtn'} onClick={()=>{dispatch({type:'DEC10'})}}> -10 </button>
              </div>

              <form onSubmit={onSubmitInc}  >
                          <input type={'number'} name={'incValue'} value={incValue} onChange={onIncChange} />
                  <button > submit</button>
              </form>


          </div>

          < Menu  pages={['Main', 'Info' , 'Call']}
                 classes= {['tr','point']}  />



          <div className={'GOTo  WrapRow'}>
              <div className={'GOTo CenT WrapLink '}>
                  <Link  to={'/users'}>go to users page</Link>
              </div>

              <div className={'GOTo CenT WrapLink '}>
                  <Link  to={'/posts'}>go to posts page</Link>
              </div>

              <div className={'GOTo CenT WrapLink'}>
                  <Link  to={'/comments'}>go to comments page</Link>
              </div>

              <div className={'GOTo CenT WrapLink  showOff'}>
                  <Link  to={'/testContext'}>go to TESTCONTEXT</Link>
              </div>

              <div className={'GOTo CenT WrapLink'}>
                  <Link  to={'/'}>go to HOME page</Link>
              </div>

              <div className={'GOTo CenT WrapLink'}>
                  <Link  to={'/postsredux'}>go to postsREDUX page</Link>
              </div>

              <div className={'GOTo CenT WrapLink'}>
                  <Link  to={'/redux'}>go to REDUX page</Link>
              </div>



          </div>

          <Switch>


              <Route path={'/users_/:id'} component={UserDetails2}/>
              {/*===================================*/}

              <Route path={'/users/:id/allposts'} render={(props)=>

                  <div className={'usersPostsFull CenT'}>
                      <PostDetails {...props}/>
                  </div>
              }
              />
              {/*===================================*/}

              <Route path={'/users/:id'} render={(props)=>

                  <div className={'usersPostsFull CenT'}>
                      <UserDetails {...props}/>
                  </div>
              }
              />
     {/*__________________________________         */}

              <Route path={'/users'} render={()=>
            <div className={'wrap'}>
            <div className={'itemUsers CenT'}>
            <Users items={users} appFn={appFn}  appFnPost={appFnPost}  appFnShow={appShow}  appShowBtn={['showOn','showOff']} />
        </div>
                <div className={'usersInfo CenT'} >
                    <div  className={'fixDiv70 '+show[0]}>
                     
                        {/*{ (user &&<div> {user.name} {JSON.stringify(user)} </div> ) ||<div> no information </div> }*/}
                        { (user &&<div> name:{user.name}  ID:{user.id} username:{user.username} email:{user.email} </div> ) ||<div> no information </div> }



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


              <Route path={'/postsredux'} render={()=>
                  <div className={'wrap'}>
                                           <div className={'usersPostsFull CenT'}>

                          <div className={'CenT '} >
                              <div className={'CenT FullPostsTitle '} > ALL POSTS</div>
                              {postsR.map(postR=>(
                                  <div key={postR.id}>
                                      <div className={'itemTitle CenT '}>

                                      {postR.title}
                                      </div>
                                          <div className={'itemBody CenT '}>
                                      {postR.body}
                                          </div>


                                  </div>   ))}

                          </div>
                      </div>
                  </div>}
              />


              <Route path={'/redux'} render={()=>
                  <div className={'wrap'}>

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


