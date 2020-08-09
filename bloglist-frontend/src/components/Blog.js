import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, addComment } from '../reducers/blogReducer'
import { addNotification } from '../reducers/notificationReducer'
import { useField } from '../hooks'

const Blog = ({ blog }) => {

  const { reset: resetComment, ...commentText } = useField ('textarea')

  const dispatch = useDispatch()

  const comment = async () => {
    const data = { id: blog.id, comment: commentText.value }
    try {await  dispatch (addComment(data))
      dispatch(addNotification({ type:'success', message: 'Your comment is added to this post' },5))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }


  const like = async () => {
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
      <h4>Comments</h4>
      <div><textarea {...commentText}/></div>
      <button onClick={comment}>Add Comment</button>
      <ul>{blog.comment ? blog.comment.map((comment,key) => <li key={key}>{comment}</li> ) : 'No comments yet on this blog'}</ul>
    </>
  )

}

export default Blog