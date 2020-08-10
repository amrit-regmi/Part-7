import React from 'react'
import { login } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks/index'
import { Button,TextField,Box,Paper,makeStyles } from '@material-ui/core'
import { addNotification } from '../reducers/notificationReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}))

const LoginForm = ( ) => {
  const classes = useStyles()

  const { reset:resetUsername,...username } = useField('text')
  const { reset:resetPassword,...password } = useField('password')

  const  dispatch = useDispatch()

  const resetField =() => {
    resetUsername()
    resetPassword()
  }

  const loginUser = async(event) => {
    event.preventDefault()
    dispatch(login(username.value,password.value))
    resetField()
    try{
      await dispatch(login(username.value,password.value))
      resetField()
      dispatch(addNotification({ type:'success', message: 'Login SuccessFull ' },3))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }
  }

  return(
    <Box m={5} px={50} py={5}component={Paper}>
      <h1>Login to Application </h1>
      <form className={classes.root}>
        <div>
          <TextField variant="outlined" label="Username" {...username}/>
        </div>
        <div>
          <TextField variant="outlined" label="Password" {...password}/>
        </div>
        <Button size ="small" variant="contained" color='primary' type='submit' onClick = { loginUser }>Submit</Button>
      </form>
    </Box>
  )
}

export default LoginForm