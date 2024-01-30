import {GET_POSTS, DELETE_POST, SET_USER} from './actions'

const INITIAL_STATE = {
  posts: [],
  filteredUser: 'All',
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case GET_POSTS:
      return {...state, posts: payload}

    case DELETE_POST:
      return {...state, posts: state.posts.filter(item => item.id !== payload)}

    case SET_USER:
      return {...state, filteredUser: payload}

    default:
      return state
  }
}

export {INITIAL_STATE, reducer}
