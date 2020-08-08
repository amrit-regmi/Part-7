import React,{ useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initialize } from '../reducers/userListReducer'

const UserList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
  },[dispatch])

  const users = useSelector(state => state.usersList)


  console.log (users)

  if (users === []) return null

  return(
    <div>
      <h2>Users</h2>
      <table>
        <thead><tr><th></th><th>Blogs created</th></tr></thead>
        <tbody>
          {users.map(user => <tr key={user.id}><td> {user.name} </td><td>{user.blogs.length}</td></tr>)}
        </tbody>
      </table>
    </div>

  )
}

export default UserList