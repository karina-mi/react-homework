import React, {useRef, useState} from 'react'
import service from '../../../services/todos'

export default function TodosForm({liftingTodo}) {
  const inputTitle = useRef()
  const [newTodo, setNewTodo] = useState({
    title: `Default value`,
    completed: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await service.post(newTodo)
    liftingTodo(response)
  }

  const handleTitle = (event) => {
    setNewTodo((prevState) => ({...prevState, title: event.target.value}))
  }
  const handleComplete = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      completed: event.target.checked,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title{" "}
        <input
          type="text"
          ref={inputTitle}
          defaultValue={newTodo.title}
          onChange={handleTitle}
        />
      </label>
      <label>
        Completed{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleComplete}
        />
      </label>
      <button>Add todo</button>
    </form>
  )
}