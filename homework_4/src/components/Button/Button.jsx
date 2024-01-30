import React, {useContext} from 'react'

export default function Button({title, clickFn, style}) {

  return <button onClick={clickFn} style={style}>{title}</button>
}