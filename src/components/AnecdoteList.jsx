import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationText, setNotificationVisibility } from '../reducers/notificationReducer'

export default function AnecdoteList() {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onButtonClick = (anecdote) =>{
        dispatch(voteAnecdote(anecdote.id))
        dispatch(setNotificationText(`you voted ${anecdote.content}`))
        dispatch(setNotificationVisibility(true))
        setTimeout(()=> dispatch(setNotificationVisibility(false)), 5000)
    } 

    return (
        <>
            {anecdotes.filter( (anecdote)=> anecdote.content.includes(filterText) ).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => onButtonClick(anecdote)}>vote</button>
                    </div>
                </div>
            )}

        </>
    )
}
