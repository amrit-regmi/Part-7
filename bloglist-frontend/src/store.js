import { combineReducers, createStore, applyMiddleware } from 'redux'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import userListReducer from './reducers/userListReducer'

const reducers = combineReducers({
  blogs:blogReducer,
  users:userReducer,
  notifications: notificationReducer,
  usersList: userListReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store