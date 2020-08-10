import React,{ useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { initUsers } from '../reducers/userListReducer'
import { Link,useParams } from 'react-router-dom'
import User from './User'
import { Table,TableBody,TableCell,TableHead,TableRow,TableContainer, Paper } from '@material-ui/core'


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
      <TableContainer component={Paper}>
        <Table>
          <TableHead><TableRow><TableCell>Name</TableCell><TableCell>Blogs created</TableCell></TableRow></TableHead>
          <TableBody>
            {users.map(user => <TableRow key={user.id}><TableCell> <UserLink user ={user}/> </TableCell><TableCell>{user.blogs.length}</TableCell></TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

export default UserList