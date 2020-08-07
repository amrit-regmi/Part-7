import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteBlog,likeBlog } from '../reducers/blogReducer'
import { addNotification } from '../reducers/notificationReducer'

const BlogDetail = ({ blog,visible }) => {
  const dispatch = useDispatch()

  const like = async () => {
    try {await dispatch(likeBlog(blog.id))
      dispatch(addNotification({ type:'success', message: `You liked '${blog.title}' ` },5))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }

  const remove = () => {
    try {dispatch(deleteBlog(blog))
      dispatch(addNotification({ type:'success', message: `You removed '${blog.content}' ` },5))
    }catch (e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }




  const currentUser = JSON.parse(window.localStorage.getItem('loggedBlogappUser')) || null

  const deleteButton = (currentUser) => {
    if(currentUser !== null && currentUser.username === blog.user.username){
      return (<button id="btn_delete" onClick ={() => remove(blog) }>Delete</button>)
    }
    return null
  }

  const visibility = { display: visible ? '':'none' }
  return (

    <div className = 'blog_detail' style={visibility} >{blog.url} <br></br>
      Likes: <span className ="likes">{blog.likes}</span> <button  id ="btn_like" onClick = { () => like()}> Like</button><br></br>
      Posted By: {blog.user.name }<br></br>
      {deleteButton(currentUser)}
    </div>


  )

}

BlogDetail.propTypes = {
  blog:PropTypes.object.isRequired,
  visible:PropTypes.bool.isRequired
}
export default BlogDetail
