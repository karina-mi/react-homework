import React, {useEffect, useReducer} from 'react'
import List from './components/List/List.jsx'
import PostsContext from './context/PostsContext.js'
import {INITIAL_STATE, reducer} from './store/reducer.js'
import service from './services/posts.js'
import {DELETE_POST_ACTION, GET_POSTS_ACTION, SET_USER_ACTION} from './store/actions.js'
import Filter from './components/Filter/Filter.jsx'

function App() {
  const [{posts, filteredUser}, dispatch] = useReducer(reducer, INITIAL_STATE)


  useEffect(() => {
    (async () => {
      const response = await service.get()
      dispatch(GET_POSTS_ACTION(response))
    })()
    // (async () => {
    //   await service.post({userName: 'A', title: 'safsfsf'})
    //   await service.post({userName: 'B', title: 'safs222222fsf'})
    //   await service.post({userName: 'C', title: 'saewddfsfsf'})
    //   await service.post({userName: 'D', title: 'asdad'})
    //   await service.post({userName: 'E', title: 'safszcxczfsf'})
    //   await service.post({userName: 'F', title: 'safs xcdscfsf'})
    //   await service.post({userName: 'G', title: 'safs3e434fsf'})
    //   await service.post({userName: 'H', title: 'safs54545fsf'})
    // })()
  }, [])

  const itemDelete = async (id) => {
    await service.delete(id)
    dispatch(DELETE_POST_ACTION(id))
  }

  const selectUser = (userName) => {
    dispatch(SET_USER_ACTION(userName))
  }

  return (
    <>
      <PostsContext.Provider value={{posts, filteredUser, itemDelete, selectUser}}>
        <Filter/>
        <List/>
      </PostsContext.Provider>
    </>
  )
}

export default App
