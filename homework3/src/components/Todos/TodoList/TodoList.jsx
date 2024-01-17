import React, {useEffect, useState, memo, useMemo, useCallback} from 'react'
import TodoListItem from './TodoListItem.jsx'
import service from '../../../services/todos'
import {TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS, TODOS_FILTER_ALL} from '../../../constants/todos.js'


export default memo(function TodoList({createdTodo, todosColor, todosFilter}) {
  const [todos, setTodos] = useState([])
  const [filteredList, setFilteredList] = useState([])

  // const [sortedTodos, setSortedTodos] = useState([])
  //
  //   (() => {
  //     console.log(`in todos sort`, todos)
  //     todos.sort((a,b) => b.completed - a.completed)
  //   })()

  useMemo(() => todos.sort((a, b) => b.completed - a.completed), [todos])

  useEffect(() => {
    (async () => {
      const response = await service.get()
      setTodos(response.slice(0, 10))
    })()
  }, [])

  useEffect(() => {
    if (Object.keys(createdTodo).length) {
      setTodos(prevState => [...prevState, createdTodo])
    }
  }, [createdTodo])

  useEffect(() => {
    setFilteredList(todos)
  }, [todos])

  useEffect(() => {

    switch (todosFilter) {
      case TODOS_FILTER_COMPLETED:
        setFilteredList(todos.filter(item => item.completed))
        break
      case TODOS_FILTER_PROGRESS:
        setFilteredList(todos.filter(item => !item.completed))
        break
      default:
        setFilteredList(todos)
    }

  }, [todosFilter, todos])

  // useEffect(() => {
  //   setSortedTodos(todos.sort((a,b) => b.completed - a.completed))
  // }, [todos])

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id)
      setTodos((prevState) => prevState.filter((item) => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const handleItemComplete = async (item) => {
    let response = await service.patch(item.id, {completed: !item.completed})

    setTodos(prevState =>
      prevState.map(el => {
        if (el.id === response.id) el = response
        return el
      }))
  }

  const getCompletedTodos = useCallback(() => {
    return todos.filter(item => item.completed).length
  }, [todos])

  // useEffect(() => {
  //   console.log(`in useEffect for getCompletedTodos`)
  // }, [getCompletedTodos()])

  return filteredList.length ? (
    <>
      <p>Completed todos: {getCompletedTodos()} </p>
      <ul style={{color: todosColor}}>
        {filteredList.map((item, index) => (
          <TodoListItem
            item={item}
            key={index}
            handleItemDelete={() => handleItemDelete(item.id)}
            handleItemComplete={handleItemComplete}
          />
        ))}
      </ul>
    </>
  ) : null
})
