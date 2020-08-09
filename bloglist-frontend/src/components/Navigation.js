import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../reducers/userReducer'

const Navigation = () => {
  const dispatch = useDispatch()

  const currentuser = useSelector(state => state.users)

  const handleLogout = () => {
    dispatch(logout())
  }
  return(
    <div>
      <Link to="/">Blogs</Link>  <Link to ="/users">Users</Link> {currentuser.name} logged in <button onClick = {handleLogout}>Logout</button>

    </div>
  )
}

export default Navigation