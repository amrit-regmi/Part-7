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
export const addComment = (data) => {
  return async dispatch => {
    const blog = await blogService.comment(data)
    dispatch({
      type:'COMMENT',
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

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await  blogService.getAll()
    dispatch({
      type:'INIT_BLOGS',
      data: blogs
    })
  }
}

const reducer = (state = [], action) => {

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
  case 'COMMENT':
    return (
      state.map(blog => {
        if(blog.id === action.data.id){
          blog.comment = action.data.comment
        }

        return blog
      })
    )

  case 'DELETE':
    return state.filter(blog => blog.id !== action.data.id)

  case 'INIT_BLOGS':
    return action.data

  default:
    return state
  }
}

export default reducer