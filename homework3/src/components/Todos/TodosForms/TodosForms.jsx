import React, {useRef, useState} from 'react'
import service from '../../../services/todos'

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function TodosForm({liftingTodo}) {
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
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        defaultValue={newTodo.title}
        onChange={handleTitle}
      />
      <label>
        Completed{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleComplete}
        />
      </label>
      <Button type="submit" variant="contained">
        Add todo
      </Button>
    </Box>
  )
}