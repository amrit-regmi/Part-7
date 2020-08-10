import React from 'react'
import Link from '@material-ui/core/Link'
import { useDispatch,useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { logout } from '../reducers/userReducer'
import { AppBar,Toolbar,Button,makeStyles  } from '@material-ui/core'
import { addNotification } from '../reducers/notificationReducer'

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },

  marginRight : {
    marginRight: 20
  }
}))

const Navigation = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const currentuser = useSelector(state => state.users)

  const handleLogout = async () => {
    try{
      await dispatch(logout())
      dispatch(addNotification({ type:'success', message: 'User logged out ' },3))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }
  return(
    <AppBar position="static">
      <Toolbar>
        <div className = {classes.grow}>
          <Link className = {classes.marginRight} component={RouterLink} to="/" variant="h6" color='inherit'>Blogs</Link>
          <Link component={RouterLink} to ="/users" variant="h6" color='inherit'>Users</Link>
        </div>
        <div>
          <div>{currentuser.name} logged in</div>
          <Button size ="small" variant="contained" color='secondary' onClick = {handleLogout}>Logout</Button></div>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation