import React from 'react'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import UserList from './components/UserList'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from './reducers/userReducer'
import { Switch, Route } from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()

  const currentuser = useSelector(state => state.users)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <Notification ></Notification>

      {currentuser === null && <LoginForm />}

      { currentuser !== null &&

        <div>
          <h2>blogs</h2>
          {currentuser.name} logged in. <button onClick = {handleLogout}>Logout</button>

          <Switch>
            <Route path ='/users/:id'>
              <UserList/>
            </Route>
            <Route path ='/users'>
              <UserList />
            </Route>
            <Route path='/blogs/:id'>
              <Blogs/>
            </Route>
            <Route path = '/'>
              <div>
                <div>
                  <BlogForm/>
                </div>
                <Blogs/>
              </div>
            </Route>
          </Switch>




        </div>

      }



    </>
  )
}

export default App