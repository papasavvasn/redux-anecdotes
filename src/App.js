import React from 'react'
import { useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Fillter'

const App = () => {

  const isVisible = useSelector(state => state.notification.isVisible)
  
  return (
    <div>
      { isVisible &&  <Notification />}
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )

}





export default App