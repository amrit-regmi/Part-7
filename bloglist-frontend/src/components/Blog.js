import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog } from '../reducers/blogReducer'
import { addNotification } from '../reducers/notificationReducer'

const Blog = ({ blog }) => {

  const dispatch = useDispatch()

  const like = async () => {
    console.log(blog.id)
    try {await dispatch(likeBlog(blog))
      dispatch(addNotification({ type:'success', message: `You liked '${blog.title}' ` },5))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }

  if (!blog) return null

  return (
    <>
      <h3>{blog.title} - {blog.author}</h3>
      <div><a href= {blog.url}> {blog.url}</a></div>
      <div>{blog.likes} likes  <button onClick = { () => like()}> Like</button></div>
      <div>added by {blog.user.name}</div>
    </>
  )

}

export default Blog