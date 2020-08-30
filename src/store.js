import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { filterReducer } from './reducers/FilterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter:filterReducer
})


export const store = createStore(reducer)