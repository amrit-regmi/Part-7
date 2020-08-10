import React from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, addComment } from '../reducers/blogReducer'
import { addNotification } from '../reducers/notificationReducer'
import { useField } from '../hooks'
import { TextField, Box , Button,IconButton ,ListItem ,List,Divider } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'

const Blog = ({ blog }) => {

  const { reset: resetComment, ...commentText } = useField ('textarea')

  const dispatch = useDispatch()

  const comment = async () => {
    const data = { id: blog.id, comment: commentText.value }
    try {await  dispatch (addComment(data))
      dispatch(addNotification({ type:'success', message: 'Your comment is added to this post' },5))
      resetComment()
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
      <div>{blog.likes} likes
        <IconButton onClick = { () => like()} color="primary" aria-label="upload picture" component="span">
          <ThumbUpAltOutlinedIcon />
        </IconButton>
      </div>
      <Box mb={3}>added by {blog.user.name}</Box>
      <Box mb={3}><TextField  label = "Comment.." multiline={true} {...commentText} variant="outlined"/></Box>
      <Button size ="small" variant="contained" color='primary' onClick={comment}>Add Comment</Button>
      <h4>Comments</h4>
      <List>{blog.comment.length !== 0 ? blog.comment.map((comment,key) => <div  key={key}><ListItem> {comment}</ListItem><Divider/></div> ) : 'No comments yet on this blog'}</List>
    </>
  )

}

export default Blog