import React from 'react'
import Button from '../../Buttun/Button.jsx'

export default function TodoListItem({
    item,
    handleItemDelete,
    handleItemComplete,
    }) {
  return (
    <li>
      {item.title}
      <Button title={"Delete"} clickFn={handleItemDelete} />
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleItemComplete(item)}
        />
      </label>
    </li>
  )
}