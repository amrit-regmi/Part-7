import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, AlertTitle } from '@material-ui/lab'

const Notification = () => {
  const notifications = useSelector(state => state.notifications)

  if (!notifications) {
    return null
  }
  return (
    <div>
      {notifications.map(notification => <Alert severity = {notification.type} key={notification.id } ><AlertTitle>{notification.type}</AlertTitle> {notification.message}</Alert> )}
    </div>
  )
}

export default Notification