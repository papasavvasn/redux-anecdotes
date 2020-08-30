import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Fillter'
import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdotesService from './services/anecdotes'

const App = () => {

  const isVisible = useSelector(state => state.notification.isVisible)
  const dispatch = useDispatch()

  useEffect(() => {
    anecdotesService
      .getAll().then(anecdotes => dispatch(initAnecdotes(anecdotes)))
  }, [dispatch])
  
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