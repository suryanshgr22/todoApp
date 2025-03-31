import React from 'react'

function Todos({todos}) {
  return (
    <div>
        {todos===undefined?"" :todos.map((todo, idx)=>(
            <div>
                <h1>{todo.title}</h1><br />
                <h3>{todo.description}</h3>
                <button>{todo.completed === true ? "Completed":"Mark as Complete"}</button>
            </div>
        ))}
    </div>
  )
}

export default Todos