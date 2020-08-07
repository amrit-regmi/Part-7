import React, { useState } from 'react'
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

Blog.propTypes = {
  blog:PropTypes.object.isRequired
}

export default Blog
