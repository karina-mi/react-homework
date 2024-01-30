import React, {useContext} from 'react'
import PostsContext from '../../context/PostsContext.js'


export default function Filter() {
  const {posts, filteredUser, selectUser} = useContext(PostsContext)
  const handleSelect = e => selectUser(e.target.value)

  return <select value={filteredUser} onChange={handleSelect}>
    <option value={'All'}>All</option>
    {posts.map(item => <option key={item.id} value={item.userName}>{item.userName}</option>)}
  </select>
}