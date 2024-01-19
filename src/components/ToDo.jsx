import React, { useEffect } from 'react'
import { useState } from 'react'
import Animation from './Animation';

const ToDo = () => {

  const [date, setDate] = useState([]);
  const [title, setTitle] = useState([])
  const [animation, setAnimation] = useState(false)

  const btn = (id) => {
    let newDate = date.filter(filt => filt.id != id)

    setDate(newDate)
  }

  const addInput = (e) => {
    setTitle(e.target.value)
  }

  const add = () => {
    let newDate = {
      id: date.length + 1,
      title: title,
    }

    if (title.length > 0) {
      setDate([newDate, ...date]);
    }

    setTitle("")
  }

  useEffect(() => {

    setAnimation(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(info => setDate(info))
      .finally(() => setAnimation(false))

  }, [])

  return (
    <div className='todo'>
      <div className="todo-head">
        <h2>To Do List</h2>

        <div className="create">
          <input onChange={addInput} value={title} type="text" placeholder='Create...' />
          <button onClick={add}>Add</button>
        </div>
      </div>

      <div className="todo-body">
        {
          animation ? <Animation/> :  date.map((value) => {
             return (
               <div key={value.id} className='card'>
                 <h2>{value.title}</h2>

                 <button onClick={() => btn(value.id)}>Delete</button>
               </div>
             )
           }
          )
        }
      </div>
    </div>
  )
}

export default ToDo