import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initialize } from '../reducers/blogReducer'
import BlogDetail from './BlogDetail'
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
  const [detailsVisible,setDetailsVisible] = useState(false)
  return (
    <div className = "blog">
      {blog.title} by {blog.author} <button id="btn_showDetail" onClick = {() => setDetailsVisible(!detailsVisible)}>{detailsVisible ? 'Hide':'ShowDetails'}</button>
      <BlogDetail blog={blog} visible={detailsVisible}></BlogDetail>
    </div>)
}

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))

  useEffect(() => { dispatch(initialize())
  },[dispatch])
  return (blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
  )
}

Blog.propTypes = {
  blog:PropTypes.object.isRequired
}

export default Blogs