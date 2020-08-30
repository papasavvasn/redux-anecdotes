import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

function AnecdoteList(props) {
    const onButtonClick = (anecdote) => {
        props.voteAnecdote(anecdote)
        props.setNotification(anecdote, 10)
    }
    return (
        <>
            {props.anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes.filter((anecdote) => anecdote?.content?.includes(state.filter))
    }
}

export default connect(mapStateToProps, { voteAnecdote, setNotification })(AnecdoteList)
