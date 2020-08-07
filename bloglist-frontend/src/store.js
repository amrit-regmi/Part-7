import { combineReducers, createStore, applyMiddleware } from 'redux'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'

const reducers = combineReducers({
  blogs:blogReducer,
  users:userReducer,
  notifications: notificationReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store