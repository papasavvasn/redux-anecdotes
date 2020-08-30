import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export default function AnecdoteList() {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const onButtonClick = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotification(anecdote, 10))
    }

    return (
        <>
            {anecdotes.sort((a, b) => b.votes - a.votes).filter((anecdote) => anecdote?.content?.includes(filterText)).map(anecdote =>
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
