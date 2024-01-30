import React, {useContext} from 'react'
import ListItem from './ListItem.jsx'
import PostsContext from '../../context/PostsContext.js'

export default function List() {
  const {posts, filteredUser, itemDelete} = useContext(PostsContext)

  const filteredPosts = filteredUser === 'All' ? posts : posts.filter(item => item.userName === filteredUser)
  return filteredPosts.length ? <ul>
    {
      filteredPosts.map(item => <ListItem key={item.id} item={item} handleDelete={() => itemDelete(item.id)} />)
    }
  </ul> : null
}
