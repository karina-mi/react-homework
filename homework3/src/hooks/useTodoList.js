import React, {useState, useEffect, useMemo, useCallback} from "react"

import service from '../services/todos'

import {TODOS_FILTER_COMPLETED, TODOS_FILTER_PROGRESS} from '../constants/todos'

export default function useTodoList(createdTodo, todosFilter) {
  const [todos, setTodos] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [isLoading, setLoading] = useState(false)

  useMemo(() => todos.sort((a, b) => b.completed - a.completed), [todos])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await service.get()
      setTimeout(() => setLoading(false), 2000)

      setTodos(response.slice(0, 10))
    })()
  }, [])

  useEffect(() => {
    if (Object.keys(createdTodo).length) {
      setTodos((prevState) => [...prevState, createdTodo])
    }
  }, [createdTodo])

  useEffect(() => {
    setFilteredList(todos)
  }, [todos])

  useEffect(() => {
    // console.log(`in useEffect for todosFilter in TodosList`, todosFilter);

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

    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response
        return el
      }),
    )
  }

  const getCompletedTodos = useCallback(() => {
    return todos.filter((item) => item.completed).length
  }, [todos])

  return [filteredList, handleItemDelete, handleItemComplete, getCompletedTodos, isLoading]
}