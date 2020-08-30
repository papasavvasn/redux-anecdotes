import anecdotesService from '../services/anecdotes'

const VOTE = 'VOTE'
const NEW_ANECDOTE = 'NEW_ANECDOTE'
const INIT_ANECDOTES = 'INIT_ANECDOTES'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case VOTE:
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.id)
      const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
      return state.map(anecdote => anecdote.id === action.id ? votedAnecdote : anecdote).sort((a, b) => b.votes - a.votes)
    case NEW_ANECDOTE:
      return [...state, action.anecdote]
    case INIT_ANECDOTES:
      return action.anecdotes
    default:
      return state
  }
}

export const createAnecdote = (anecdote) => async (dispatch) => {
  const newAnecdote = await anecdotesService.createNew(anecdote)
  dispatch({
    type: NEW_ANECDOTE,
    anecdote: newAnecdote
  })
}

export const voteAnecdote = (anecdote) => async (dispatch) => {
  const votedAnecdote = await anecdotesService.voteAnecdote(anecdote)
  dispatch({
    type: VOTE,
    id: votedAnecdote.id
  })
}


export const initAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdotesService.getAll()
  console.log("fetched anecdotes are", anecdotes);
  dispatch({ type: INIT_ANECDOTES, anecdotes })

}



export default reducer

