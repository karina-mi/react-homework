// action types
const GET_POSTS = 'GET_POSTS'
const DELETE_POST = 'DELETE_POST'
const SET_USER = 'SET_USER'

// actions
const GET_POSTS_ACTION = posts => ({type: GET_POSTS, payload: posts})
const DELETE_POST_ACTION = id => ({type: DELETE_POST, payload: id})
const SET_USER_ACTION = userName => ({type: SET_USER, payload: userName})

export {GET_POSTS_ACTION, DELETE_POST_ACTION, SET_USER_ACTION, SET_USER, GET_POSTS, DELETE_POST}
