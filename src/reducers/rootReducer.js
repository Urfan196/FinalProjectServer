const initialState = {
    currentUser: {},
    users: [],
    items: [],
    selectedItem: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
          return state
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.user}
        case 'SET_ALL_USERS':
            return {...state, users: action.users }
        case 'SET_ALL_ITEMS':
            return {...state, items: action.items }
        case 'SET_SELECTED_ITEM':
            return {...state, selectedItem: action.item  }
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        default:
          return state
    }
}

export default rootReducer