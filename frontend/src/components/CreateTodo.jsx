import React, { useState } from 'react'

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
        <input type="text" placeholder='title' onChange={function(e){setTitle(e.target.value)}} /><br />
        <input type="text" placeholder='description' onChange={function(e){setDescription(e.target.value)}} /><br />

        <button type="button" onClick={()=>{
          fetch('http://localhost:3000/todo',
            {
              method:"POST",
              body:JSON.stringify(
                {
                  title,
                  description
                }
              ),
              headers:{
                "Content-Type": "application/json",
              }
            }
          )
          .then(async(res)=>{
            const json = await res.json();
            alert(json.msg)
          }).catch(async (error)=>{
            const json = await error.json();
            alert(json)
          })
        }}
        >Add Todo</button>
    </div>
  )
}

export default CreateTodo