import React from 'react'
import { useHistory } from "react-router-dom"
import  { useField } from '../hooks'

const CreateNew = (props) => {
  const history = useHistory()
  
  const {reset: resetContent, ...content} = useField('text')
  const {reset: resetAuthor,...author} = useField('text')
  const {reset: resetInfo,...info} = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content:content.value,
      author:author.value,
      info:info.value,
      votes: 0
    })
    history.push('/')
  }

  const clearInput = (e) => {
    e.preventDefault()
      resetContent()
      resetAuthor()
      resetInfo()
      
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content}  />
        </div>
        <div>
          author
          <input name='author' {...author} />
        </div>
        <div>
          url for more info
          <input name='info'{...info} />
        </div>
        <button>create</button> <button onClick = {clearInput}> reset</button>
      </form>
    </div>
  )

}

export default CreateNew