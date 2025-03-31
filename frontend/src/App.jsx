import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  // const todos = [
  //   {
  //     title:"Goto gym",
  //     description:"suryansh goto gym",
  //     completed:true
  //   },
  //   {
  //     title:"Complete web dev",
  //     description:"complete harkirat course",
  //     completed:false
  //   }
  // ]

  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos)
    })
  },[])

  return (
    <>
      <div>
        <CreateTodo/>
        <Todos todos={todos} ></Todos>
      </div>
    </>
  )
}

export default App
