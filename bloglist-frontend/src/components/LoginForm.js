import React from 'react'
import { login } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks/index'

const LoginForm = ( ) => {
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
  }

  return(
    <div>
      <h1>Login to Application </h1>
      <form>
        <div>
      Username <input {...username}>
          </input>
        </div>
        <div>
      Password   <input {...password}>
          </input>
        </div>
        <button id='submit' type='submit' onClick = { loginUser }>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm