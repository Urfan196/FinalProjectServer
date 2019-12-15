const initialState = {
    currentUser: {},
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
          return state
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.user}
        case 'ADD_USER':
        return {...state, users:[...state.users, action.user]}
        default:
          return state
    }
}

export default rootReducer