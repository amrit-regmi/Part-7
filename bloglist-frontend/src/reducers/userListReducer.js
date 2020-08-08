import userService from '../services/users'

export const initialize = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type:'INIT',
      data: users
    })
  }
}

const reducer = (state = [], action) => {

  switch (action.type) {
  case 'INIT':
    return action.data
  default:
    return state

  }

}

export default reducer