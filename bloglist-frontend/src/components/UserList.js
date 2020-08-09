import React,{ useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initUsers } from '../reducers/userListReducer'
import { Link,useParams } from 'react-router-dom'
import User from './User'


const UserLink = ({ user }) => {
  return (<Link to ={`/users/${user.id}`}>{user.name}</Link>)
}

const UserList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initUsers())
  },[dispatch])

  const users = useSelector(state => state.usersList)

  const id = useParams().id

  if(id) return <User user = {users.find( user => user.id === id )}></User>

  if (users===null) return null

  return(
    <div>
      <h2>Users</h2>
      <table>
        <thead><tr><th></th><th>Blogs created</th></tr></thead>
        <tbody>
          {users.map(user => <tr key={user.id}><td> <UserLink user ={user}/> </td><td>{user.blogs.length}</td></tr>)}
        </tbody>
      </table>
    </div>

  )
}

export default UserList