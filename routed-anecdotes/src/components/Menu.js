import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link, 
} from "react-router-dom"
import AnecdoteList from './AnecdoteList'
import Anecdote from './Anecdote'
import CreateNew from './CreateNew'
import About from './About'


const Menu = ({anecdotes,addNew}) => {
  const padding = {
    paddingRight: 5,
    margin: 5
  }
  return (
    <Router>
      <div>
        <Link style= {padding} to="/">anecdotes</Link>
        <Link style= {padding} to="/create">add new</Link>
        <Link style= {padding} to="/about">about</Link>
      </div>
      <Switch>
      <Route path="/anecdotes/:id">
        <Anecdote  anecdotes={anecdotes} />
      </Route>
        <Route path = "/create">
          <CreateNew addNew={addNew} />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path="/">
           <AnecdoteList anecdotes={anecdotes} />
        </Route> 
      </Switch>
    </Router>
  )
}
export default Menu