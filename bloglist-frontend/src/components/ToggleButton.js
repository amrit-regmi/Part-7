import React, { useState,useImperativeHandle } from 'react'
import { Button } from '@material-ui/core'

const ToggleButton = React.forwardRef((props,ref) => {
  const [visible,setVisible] = useState(false)

  const hide = { display: visible ? 'none':'' }
  const show = { display: visible ? '':'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <>
      <Button variant="contained" color='primary' style={hide} onClick = {toggleVisibility}> {props.buttonLabelHidden}</Button>
      <div  style={show}>
        {props.children} <Button   size ="small" variant="contained" color='secondary' onClick={toggleVisibility}>{props.buttonLabelVisible}</Button>
      </div>
    </>
  )
})
ToggleButton.displayName = 'Togglable'
export default ToggleButton