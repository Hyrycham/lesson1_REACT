import './App.css';
import {setLoadingTrue,setLoadingFasle,pushNewTodo,addTodos} from './redux/actionCreators/'
import {useEffect, useState} from "react";
// import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'

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
        <div className={'userCard CenT '}>
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
        </div>
    )
}

const TodosList =({todos,isLoading,GetTodoId})=>{
    if (isLoading) return <h1>LOADING....</h1>
    return(
        <div className={'WrapColumn CenT usersPostsFull'}>
            {todos.map(todo=>(
                <div className={'WrapColumn CenT todo'} key={todo.id}>
                <h4>
                    {todo.title}
                </h4>
                    <p>
                        {todo.description}
                    </p>
                    <span> Created At:{new Date(todo.createdAt).toLocaleString()} </span>
                    <hr/>
<div>
    <button onClick={()=>{GetTodoId(todo.id)}}>GET ID </button>
</div>
                </div>
                ))
                    }
        </div>

    )
}


   // ==============

function App() {
    const {todos,isLoading}=useSelector(({todosReducer})=>todosReducer);
const  dispatch= useDispatch()
// ==================
    const GetTodoId = (id)=>{
        console.log(id)
        fetchTodosId (id)
    }
    // useEffect(()=> {
    //     fetchTodosId()
    // },[])
    const fetchTodosId = async (id)=>{

            try {
                dispatch(setLoadingTrue())
            const response= await fetch('http://localhost:8888/todo/'+id)
            const  data= await response.json();
            console.log(data)
        } catch (e){
            console.log(e)
        } finally {
                dispatch( setLoadingFasle())
        }

    }
// ==============
  useEffect(()=> {
      fetchTodos()
  },[])
    const fetchTodos = async ()=>{
      try {
          dispatch(setLoadingTrue())
          const response= await fetch('http://localhost:8888/get-todos')
          const  data= await response.json();
          dispatch(addTodos(data))
      } catch (e){
          console.log(e)
      } finally {
          dispatch( setLoadingFasle())
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
// await fetchTodos();
        console.log(data)
    dispatch( pushNewTodo(data))


}

    // ===========================

      return (


      <div>
<CreateTodoForm onSubmit={onTodoCreate}/>
          <TodosList todos={todos} isLoading={isLoading} GetTodoId={GetTodoId}/>

          </div>

    );

}


export default App