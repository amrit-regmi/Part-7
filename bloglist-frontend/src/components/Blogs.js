import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initBlogs } from '../reducers/blogReducer'
import Blog from './Blog'
import PropTypes from 'prop-types'
import { List,ListItem,Divider } from '@material-ui/core'

import { Link,useParams } from 'react-router-dom'

const BlogLink = ({ blog }) => {
  return (
    <>
      <ListItem key = {blog.id} component={Link} to={`/blogs/${blog.id}`}>{blog.title} by {blog.author}</ListItem>
      <Divider />
    </>
  )
}

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))

  useEffect(() => { dispatch(initBlogs())
  },[dispatch])

  const id = useParams().id

  if(id) return  <Blog blog = {blogs.find(blog => blog.id === id)}/>

  return (
    <>

      <List>
        {blogs.map((blog) => <BlogLink key={blog.id} blog={blog} />)}
      </List>
    </>
  )
}

BlogLink.propTypes = {
  blog:PropTypes.object.isRequired
}

export default Blogs