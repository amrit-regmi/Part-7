import React, { useState, useEffect,useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import ToggleButton from './components/ToggleButton'
import { useDispatch,useSelector } from 'react-redux'
import { initialize } from './reducers/blogReducer'
import { logout } from './reducers/userReducer'

const App = () => {
  const [notification,setNotification] = useState(null)

  const dispatch = useDispatch()


  const blogFormRef = useRef()

  const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))
  useEffect(() => { dispatch(initialize())
  },[dispatch])

  const user = useSelector(state => state.users)

  const notify = (type,message) => {
    const notify = {
      type: type,
      message: message
    }
    setNotification(notify)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  /*const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username,password })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      notify('error','Wrong credentials')
    }
  }*/

  const handleLogout = () => {
    //setUser(null)
    dispatch(logout())
    window.localStorage.removeItem('loggedBlogappUser')
    notify('error','Logged Out')
  }




  return (
    <>
      <Notification notification = {notification}></Notification>

      {user === null &&
        <LoginForm ></LoginForm>
      }

      { user !== null &&

        <div>
          <h2>blogs</h2>
          {user.name} logged in. <button onClick = {handleLogout}>Logout</button>

          <div>
            <ToggleButton buttonLabelHidden={'Add new Entry'} buttonLabelVisible={'Cancel'} ref={blogFormRef}>
              <BlogForm/>
            </ToggleButton>
          </div>


          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </div>

      }



    </>
  )
}

export default App