import { combineReducers, createStore, applyMiddleware } from 'redux'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  blogs:blogReducer,
  users:userReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store