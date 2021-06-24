import './App.css';
import Users  from './components/users/users'
import Menu  from './components/menu/menu'
import Posts from "./components/posts/posts";
export default App;


function App() {
  return (
      <div>

          < Menu  pages={['users page', 'posts page' , 'comments page']}
                 classes= {['tr','point']}
          />
          < Users />
          <Posts/>


          < Menu  pages={['about', 'team' , 'contact']}
                  classes= {['target','point','asd']}
          />

      </div>
  );
}


