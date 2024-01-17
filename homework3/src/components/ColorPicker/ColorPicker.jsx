import React, {memo} from 'react'


import {MuiColorInput} from "mui-color-input"

export default memo(function ColorPicker({todosColor, setTodosColor}) {

  const handleChange = (value) => setTodosColor(value)

  return <MuiColorInput value={todosColor} onChange={handleChange}/>
})