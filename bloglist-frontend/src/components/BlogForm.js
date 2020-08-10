import React from 'react'
import { addBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks'
import { addNotification } from '../reducers/notificationReducer'
import ToggleButton from './ToggleButton'
import  { useRef } from 'react'
import { Button,TextField,Box,Paper,makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}))

const BlogForm = ( ) => {
  const classes = useStyles()
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')

  const ref = useRef()
  const dispatch = useDispatch()
  const reset = () => {
    resetTitle()
    resetAuthor()
    resetUrl()
  }

  const createBlog =  async () => {
    try{await dispatch(addBlog({ title:title.value,author:author.value,url:url.value }))
      reset()
      ref.current.toggleVisibility()
      dispatch(addNotification({ type:'success', message: `You added '${title.value}' ` },5))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }

  }




  return(

    <Box component={Paper} p ={1}>
      <ToggleButton buttonLabelHidden={'Add new Entry'} buttonLabelVisible={'Cancel'} ref={ref}>
        <Box  py= {2} m = {2} >
          <h2>Create New </h2>
          <form className={classes.root}>
            <div>
              <TextField variant="outlined" label="Title"{...title} fullWidth/>
            </div>
            <div>
              <TextField variant="outlined" label="author"{...author} fullWidth/>
            </div>
            <div>
              <TextField variant="outlined" label="url" {...url} fullWidth />
            </div>
          </form>
        </Box>
        <Button size ="small" variant="contained" color='primary'onClick={() => createBlog()}> Create</Button>

      </ToggleButton>
    </Box>
  )
}

export default BlogForm