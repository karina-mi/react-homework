import React from 'react'
import {TODOS_FILTER_ALL, TODOS_FILTER_PROGRESS, TODOS_FILTER_COMPLETED} from '../../constants/todos.js'

export default function Filter({todosFilter, setTodosFilter}) {

  const handleSelect = e => setTodosFilter(e.target.value)

  return <select defaultValue={todosFilter} onChange={handleSelect}>
    <option value={TODOS_FILTER_ALL}>All</option>
    <option value={TODOS_FILTER_COMPLETED}>Completed</option>
    <option value={TODOS_FILTER_PROGRESS}>In progress</option>
  </select>
}