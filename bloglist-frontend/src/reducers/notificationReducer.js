const generateId = () => Math.floor(Math.random() *1000)

export const addNotification = (notification,timeout) => {
  let timeoutId

  return async dispatch => {
    timeoutId && clearTimeout(timeoutId)
    const data ={ ...notification,id:generateId() }
    dispatch ({
      type:'NOTIFY',
      data
    })

    timeoutId =  setTimeout (() => {
      dispatch({
        type:'REMOVE',
        data
      })
    },timeout * 1000)
  }
}

const notificationReducer = (state = [] ,action) => {

  switch (action.type){
  case 'NOTIFY':
    return [...state,action.data]
  case 'REMOVE':
    return  [...state].filter(notification => notification.id !== action.data.id)
  default:
    return state
  }
}

export default notificationReducer