import React, {memo} from "react"

import TodoListItem from "./TodoListItem"

import useTodoList from "./../../../hooks/useTodoList"

import List from "@mui/material/List"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

export default memo(function TodoList({
  createdTodo,
  todosColor,
  todosFilter,
  }) {
  const [
    filteredList,
    handleItemDelete,
    handleItemComplete,
    getCompletedTodos,
    isLoading,
  ] = useTodoList(createdTodo, todosFilter)

  return filteredList.length ? (
    isLoading ? (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{fontSize: "1rem"}}/>
        <Skeleton variant="text" sx={{fontSize: "1rem"}}/>
        <Skeleton variant="text" sx={{fontSize: "1rem"}}/>
      </Stack>
    ) : (
      <>
        <p>Completed todos: {getCompletedTodos()}</p>
        <List style={{color: todosColor}}>
          {filteredList.map((item, index) => (
            <TodoListItem
              key={index}
              item={item}
              handleItemDelete={() => handleItemDelete(item.id)}
              handleItemComplete={handleItemComplete}
            />
          ))}
        </List>
      </>
    )
  ) : null
})