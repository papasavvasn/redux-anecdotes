export const notificationReducer = (state = "", action) => {
    console.log('notification state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}
