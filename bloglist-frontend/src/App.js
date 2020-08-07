import React, { useEffect,useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import ToggleButton from './components/ToggleButton'
import { useDispatch,useSelector } from 'react-redux'
import { initialize } from './reducers/blogReducer'
import { logout } from './reducers/userReducer'


const App = () => {

  const dispatch = useDispatch()

  const blogFormRef = useRef()

  const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))

  useEffect(() => { dispatch(initialize())
  },[dispatch])

  const user = useSelector(state => state.users)

  const notifications = useSelector(state => state.notification)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Notification notifications = {notifications}></Notification>

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