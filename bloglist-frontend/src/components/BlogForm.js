import React,{ useState } from 'react'
import { addBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const BlogForm = ( ) => {
  const [title,setTitle] = useState('')
  const [url,setUrl] = useState('')
  const [author,setAuthor] = useState('')

  const dispatch = useDispatch()

  const createBlog =  async (event) => {
    event.preventDefault()
    dispatch(addBlog({ title,author,url }))
    setUrl('')
    setAuthor('')
    setTitle('')
  }


  return(
    <div>
      <h2>Create New </h2>
      <form onSubmit = { createBlog }>
        <div>
      Title: <input type='text'
            value= {title}
            name ='title'
            onChange = {({ target }) => setTitle(target.value)}>
          </input>
        </div>
        <div>
      Author:   <input type='text'
            value= {author}
            name ='author'
            onChange = {({ target }) => setAuthor(target.value)}>
          </input>
        </div>
        <div>
      Url:   <input type='text'
            value= {url}
            name ='url'
            onChange = {({ target }) => setUrl(target.value)}>
          </input>
        </div>
        <button id = "btn_create" type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BlogForm