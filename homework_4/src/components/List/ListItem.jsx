import React from 'react'
import Button from '../Button/Button.jsx'

export default function ListItem({item, handleDelete}) {

  return <li>UserName: {item.userName}<br/>Title: {item.title}<br/><Button title={'Delete'} clickFn={handleDelete} style={{marginLeft: '5px'}}/></li>
}