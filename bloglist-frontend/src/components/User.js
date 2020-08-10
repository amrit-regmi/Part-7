import React from 'react'
import { Link } from 'react-router-dom'
import { List,ListItem,Divider } from '@material-ui/core'

const BlogLink = ({ blog }) => {
  return (
    <>
      <ListItem component={Link} to={`/blogs/${blog.id}`}>{blog.title} by {blog.author}</ListItem>
      <Divider />
    </>
  )
}

const User = ({ user }) => {
  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>
      <strong>Added blogs</strong>
      <List>{user.blogs.map(blog => <BlogLink key={blog.id} blog={blog} />)}
      </List>
    </div>
  )

}
export default User