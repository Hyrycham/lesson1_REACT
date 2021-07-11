import './App.css';

import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'

import {useSelector, useDispatch} from "react-redux";

const CreateTodoForm = ( {onSubmit} )=>{
   const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [loading,setLoading]=useState(false)


    const handleSubmit= async (e)=>{
        e.preventDefault();
       if(!title||!description||loading) return;
  try{
      setLoading(true)
      await onSubmit(title,description);
      setTitle('')
      setDescription('')
  } catch (e) {console.log(e)
        } finally {
      setLoading(false)
        }

    }
    return(
        <form onSubmit={handleSubmit}>
<input
    type='text'
    placeholder='title'
    value={title}
    onChange={({target:{value}})=>setTitle(value)}/>

            <input
                type='text'
                placeholder='description'
           value={description}
                onChange={({target:{value}})=>setDescription(value)}/>

            <button type='submit' disabled={!title||!description||loading}> create todo </button>

        </form>
    )
}

const TodosList =({todos,isLoading})=>{
    return(
        <div>
            {todos.map(todo=>(
                <div>
                <h4>
                    {todo.title}
                </h4>
                    <p>
                        {todo.description}
                    </p>
                </div>
                ))
                    }
        </div>

    )
}

export default App
function App() {
    const store=useSelector(state=>state);
    console.log(store);

  useEffect(()=>{},[])
    const fetchTodos = async ()=>{
      try {
          const response= await fetch('http://localhost:8888/get-todos')
          const  data= await response.json()
      } catch (e){
          console.log(e)
      } finally {

      }

    }



const onTodoCreate= async (title,description)=>{
    if(!title||!description) return;
const  response=await fetch('http://localhost:8888/create-todo',{
    method:'POST',
    body:JSON.stringify({title,description}),
    headers:{
        'Content-type':'application/json'
    }
})
const data= await response.json();
    console.log(data)
}

// ===========================

    // const dispatch=useDispatch()

    // ===========================

      return (


      <div>
<CreateTodoForm onSubmit={onTodoCreate}/>
          <TodosList/>

          </div>

    );

}


