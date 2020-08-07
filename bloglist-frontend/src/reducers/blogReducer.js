import blogService from '../services/blogs'

export const addBlog = (data) => {
  return async dispatch => {
    const blog = await blogService.create(data)
    dispatch({
      type:'ADD',
      data: blog
    })
  }
}

export const likeBlog = (data) => {
  return async dispatch => {
    const blog = await blogService.update({ ...data, likes:data.likes+1 })
    dispatch({
      type:'LIKE',
      data: blog
    })
  }

}
export const deleteBlog = (data) => {
  return async dispatch => {
    await blogService.deleteBlog(data)
    dispatch({
      type:'DELETE',
      data
    })
  }

}

export const initialize = () => {
  return async dispatch => {
    const blogs = await  blogService.getAll()
    dispatch({
      type:'INIT',
      data: blogs
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type){
  case 'ADD':
    return [...state,action.data]

  case 'LIKE':
    return (
      state.map(blog => {
        if(blog.id === action.data.id){
          blog= action.data
        }
        return blog
      })
    )

  case 'DELETE':
    return state.filter(blog => blog.id !== action.data.id)

  case 'INIT':
    return action.data

  default:
    return state
  }
}

export default reducer