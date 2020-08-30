import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Fillter'
import Notification from './components/Notification'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const isVisible = useSelector(state => state.notification.isVisible)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAnecdotes())
  }, [dispatch])

  return (
    <div>
      {isVisible && <Notification />}
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )

}





export default App