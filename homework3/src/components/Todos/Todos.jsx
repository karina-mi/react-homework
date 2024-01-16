import React, {useState} from 'react'
import TodosList from './TodoList/TodoList'
import TodosForm from './TodosForms/TodosForms.jsx'
import './style.sass'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({})

  return (
    <div>
      <TodosList createdTodo={createdTodo}/>
      <TodosForm liftingTodo={setCreatedTodo}/>
    </div>
  )
}