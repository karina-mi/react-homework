import React, {useState} from 'react'
import TodosList from './TodoList/TodoList'
import TodosForm from './TodosForms/TodosForms.jsx'
import './style.sass'
import ColorPicker from '../ColorPicker/ColorPicker.jsx'
import Filter from './../Filter/Filter'
import {TODOS_FILTER_ALL} from '../../constants/todos.js'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({})
  const [todosColor, setTodosColor] = useState(`#000`)
  const [todosFilter, setTodosFilter] = useState(TODOS_FILTER_ALL)

  return (
    <div>
      <TodosForm liftingTodo={setCreatedTodo}/>
      <ColorPicker todosColor={todosColor} setTodosColor={setTodosColor} />
      <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter}/>
      <TodosList createdTodo={createdTodo} todosColor={todosColor} todosFilter={todosFilter}/>
    </div>
  )
}