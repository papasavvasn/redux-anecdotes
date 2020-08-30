const VOTE = 'VOTE'
const NEW_ANECDOTE = 'NEW_ANECDOTE'
const INIT_ANECDOTES = 'INIT_ANECDOTES'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case VOTE:
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.id)
      const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
      return state.map(anecdote => anecdote.id === action.id ? votedAnecdote : anecdote).sort((a, b) => b.votes - a.votes)
    case NEW_ANECDOTE :
      return [...state, action.anecdote]
      case INIT_ANECDOTES:
        return action.anecdotes
    default:
      return state
  }
}

export const createAnecdote = (anecdote) => ({
  type: NEW_ANECDOTE ,
  anecdote
})

export const voteAnecdote = (id) => ({ type: VOTE, id })

export const initAnecdotes = (anecdotes) => ({ type:INIT_ANECDOTES, anecdotes })

export default reducer
