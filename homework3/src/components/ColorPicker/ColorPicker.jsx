import React, {memo}from 'react'

export default memo(function ColorPicker({todosColor, setTodosColor}) {

  const handleChange = e => setTodosColor(e.target.value)

  return <input type='color' defaultValue={todosColor} onChange={handleChange} />
})