import React from 'react'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import UserList from './components/UserList'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

const App = () => {


  const currentuser = useSelector(state => state.users)

  if (!currentuser) return <LoginForm />

  return (
    <>

      <Navigation></Navigation>
      <Notification ></Notification>



      <h2>Blog App</h2>
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



    </>
  )
}

export default App