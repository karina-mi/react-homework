import React from "react"

import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export default function TodoListItem({
 item,
 handleItemDelete,
 handleItemComplete,
 }) {
  return (
    <ListItem>
      {item.title}
      <IconButton onClick={handleItemDelete} edge="end" aria-label="Delete">
        <DeleteIcon/>
      </IconButton>
      <FormControlLabel
        control={
          <Checkbox
            checked={item.completed}
            onChange={() => handleItemComplete(item)}
          />
        }
        label="Completed"
      />
    </ListItem>
  )
}