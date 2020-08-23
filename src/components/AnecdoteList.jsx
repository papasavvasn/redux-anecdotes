import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

export default function AnecdoteList() {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    return (
        <>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}

        </>
    )
}
