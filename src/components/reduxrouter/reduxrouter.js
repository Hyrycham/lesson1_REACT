import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'
import ReduxPosts from "../reduxposts/reduxposts";
import ReduxUsers from "../reduxuser/reduxuser";

export default function ReduxRouter() {

   return(
       <Router>
           <Switch>
           <div>
               <div className={'GOTo  WrapRow'}>
                   <div className={'GOTo CenT WrapLink '}>
                       <Link  to={'/r_users'}>go to users page</Link>
                   </div>

                   <div className={'GOTo CenT WrapLink '}>
                       <Link  to={'/r_posts'}>go to posts page</Link>
                   </div>

                   <div className={'GOTo CenT WrapLink'}>
                       <Link  to={'/r_comments'}>go to comments page</Link>
                   </div>

                       <div className={'GOTo CenT WrapLink'}>
                       <Link  to={'/'}>go to HOME page</Link>
                   </div>
                                  </div>
               <Route path={'/r_posts'} component={ReduxPosts}/>
               <Route path={'/r_users'} component={ReduxUsers}/>
               <Route path={'/r_comments'} component={ReduxPosts}/>


           </div>
               </Switch>
           </Router>
               )
}