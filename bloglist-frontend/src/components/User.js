import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>
      <strong>added blogs</strong>
      <ul>{user.blogs.map(blog => <li key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></li>)}
      </ul>
    </div>
  )

}
export default User