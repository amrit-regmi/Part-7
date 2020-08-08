import React from 'react'
import { addBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { useField } from '../hooks'
import { addNotification } from '../reducers/notificationReducer'
import ToggleButton from './ToggleButton'
import  { useRef } from 'react'

const BlogForm = ( ) => {

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

  const createBlog =  async (event) => {
    event.preventDefault()
    try{await dispatch(addBlog({ title:title.value,author:author.value,url:url.value }))
      reset()
      ref.current.toggleVisibility()
      dispatch(addNotification({ type:'success', message: `You added '${title.value}' ` },5))
    }catch(e){
      dispatch(addNotification({ type:'error', message: `${e}` },5))
    }

  }




  return(
    <ToggleButton buttonLabelHidden={'Add new Entry'} buttonLabelVisible={'Cancel'} ref={ref}>
      <div>
        <h2>Create New </h2>
        <form onSubmit = { createBlog }>
          <div>
      Title: <input {...title}/>
          </div>
          <div>
      Author:   <input {...author}/>
          </div>
          <div>
      Url:   <input {...url} />
          </div>
          <button id = "btn_create" type='submit'>Create</button>
        </form>
      </div>
    </ToggleButton>
  )
}

export default BlogForm