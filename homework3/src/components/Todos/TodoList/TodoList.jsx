import React, {useEffect, useState} from 'react'
import service from '../../../components/servises/todos'
import TodoListItem from './TodoListItem.jsx'


export default function TodoList({createdTodo}) {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      const response = await service.get()
      setTodos(response.slice(0, 10))
    })()
  }, [])

  useEffect(() => {
    if(Object.keys(createdTodo).length) {
      setTodos(prevState => [...prevState, createdTodo])
    }
  }, [createdTodo])
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

  return todos.length ? (
    <ul>
      {todos.map((item, index) => <TodoListItem
        item={item}
        key={index}
        handleItemDelete={() => handleItemDelete(item.id)}
        handleItemComplete={handleItemComplete}
        />)}
    </ul>
  ) : null
}
