import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  if (!user) return null

  return (
    <div>
      <h1>{user.name}</h1>
      <em>added blogs</em>
      <ul>{user.blogs.map(blog => <li key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></li>)}
      </ul>
    </div>
  )

}
export default User