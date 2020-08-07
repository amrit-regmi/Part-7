import loginService from '../services/login'
import blogService from '../services/blogs'

const savedUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
    return user
  }

  return null
}

export const login =  (username,password) => {
  return async dispatch => {
    const user = await loginService.login({ username,password })
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    console.log(user)
    dispatch({
      type:'LOGIN',
      data: user
    })
  }
}

export const logout = () => {
  window.localStorage.removeItem('loggedBlogappUser')
  return dispatch => (
    dispatch({
      type:'LOGOUT'
    })
  )
}



const reducer = (state = savedUser(),action) => {

  switch (action.type){
  case 'LOGIN':
    return action.data
  case 'LOGOUT':
    return null
  default:
    return state
  }

}

export default reducer