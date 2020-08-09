import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initialize } from '../reducers/blogReducer'
import Blog from './Blog'
import PropTypes from 'prop-types'

import { Link,useParams } from 'react-router-dom'

const BlogLink = ({ blog }) => {
  return (
    <div className = "blog">
      <Link to={`/blogs/${blog.id}`}>{blog.title} by {blog.author}</Link>
    </div>)
}

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))

  useEffect(() => { dispatch(initialize())
  },[dispatch])

  const id = useParams().id
  console.log(id)

  if(id) return  <Blog blog = {blogs.find(blog => blog.id === id)}/>

  return (blogs.map((blog) => <BlogLink key={blog.id} blog={blog} />)
  )
}

BlogLink.propTypes = {
  blog:PropTypes.object.isRequired
}

export default Blogs