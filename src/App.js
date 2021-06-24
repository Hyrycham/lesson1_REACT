import './App.css';
// import Users  from './components/users/users'
import Menu  from './components/menu/menu'
// import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";
export default App;


function App() {
  return (
      <div>

          < Menu  pages={['users page', 'posts page' , 'comments page']}
                 classes= {['tr','point']}
          />
                 <Comments/>

          < Menu  pages={['about', 'team' , 'contact']}
                  classes= {['target','point','asd']}
          />

      </div>
  );
}


