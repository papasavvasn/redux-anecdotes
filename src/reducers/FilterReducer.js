const FILTER = 'FILTER'

export const filterReducer = (state = "", action) => {
    console.log('notification state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case FILTER:
            return action.text
        default:
            return state
    }
}


export const setFilterText = (text="") => ({
    type: FILTER,
    text
})
