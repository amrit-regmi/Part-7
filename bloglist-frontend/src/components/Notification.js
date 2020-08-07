import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notifications = useSelector(state => state.notifications)

  if (!notifications) {
    return null
  }
  return (
    <div>
      {notifications.map(notification => <div key={notification.id }className={notification.type }>{notification.message}</div> )}
    </div>
  )
}

export default Notification