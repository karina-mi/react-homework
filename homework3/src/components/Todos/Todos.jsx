import React, {useEffect, useState} from "react"
import "./style.sass"

import TodosForm from '../Todos/TodosForms/TodosForms'
import TodoList from '../Todos/TodoList/TodoList'
import ColorPicker from './../ColorPicker/ColorPicker'
import Filter from "./../Filter/Filter"

import {TODOS_FILTER_ALL, TODOS_COLOR} from '../../constants/todos'

import useLocalStorage from './../../hooks/useLocalStorage'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({})

  const [todosColor, setTodosColor] = useLocalStorage(`todosColor`, TODOS_COLOR)
  const [todosFilter, setTodosFilter] = useLocalStorage(`todosFilter`, TODOS_FILTER_ALL)

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{p: 2}}>
        <TodosForm liftingTodo={setCreatedTodo}/>
        <ColorPicker todosColor={todosColor} setTodosColor={setTodosColor}/>
        <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter}/>
        <TodoList
          createdTodo={createdTodo}
          todosColor={todosColor}
          todosFilter={todosFilter}
        />
      </Paper>
    </Container>
  )
}