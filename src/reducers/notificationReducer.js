const NOTIFICATION_TEXT = 'NOTIFICATION_TEXT'
const NOTIFICATION_VISIBILITY = "NOTIFICATION_VISIBILITY"

export const notificationReducer = (state = { notificationText: "", isVisible: false }, action) => {
    console.log('notification state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case NOTIFICATION_TEXT:
            return { ...state, notificationText: action.notificationText }
        case NOTIFICATION_VISIBILITY:
            return { ...state, isVisible: action.isVisible }
        default:
            return state
    }
}


export const setNotificationText = (notificationText = "") => ({
    type: NOTIFICATION_TEXT,
    notificationText
})

export const setNotificationVisibility = (isVisible = false) => ({
    type: NOTIFICATION_VISIBILITY,
    isVisible
})

let timeoutID

export const setNotification = (anecdote, time) => (dispatch) => {
    if (timeoutID) clearTimeout(timeoutID)
    dispatch(setNotificationText(`you voted ${anecdote.content}`))
    dispatch(setNotificationVisibility(true))
    timeoutID = setTimeout(() => dispatch(setNotificationVisibility(false)), time * 1000)
}
