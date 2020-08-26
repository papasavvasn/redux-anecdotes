import React from 'react'
import { useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {

  const isVisible = useSelector(state => state.notification.isVisible)
  console.log("is visible---------------", isVisible)
  
  return (
    <div>
      { isVisible &&  <Notification />}
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )

}





export default App