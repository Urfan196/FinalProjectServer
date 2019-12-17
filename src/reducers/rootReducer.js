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
            return {...state, selectedItem: action.item}
        case 'EDIT_SELECTED_ITEM':
            return {...state, selectedItem: action.item}
        case 'EDIT_ITEM_OF_CURRENT_USER':
            const newArray = state.currentUser.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                }
            })
            return {...state, currentUser:{...state.currentUser, newArray}}
        case 'DELETE_ITEM':
            const filteredArray = state.currentUser.items.filter(item => item.id !== action.item.id)
            return {...state, currentUser: {...state.currentUser, filteredArray}}
        case 'CHANGE_ITEM_AVAILABILITY':
            const availArray = state.currentUser.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                }
            })
            return {...state, currentUser: {...state.currentUser, availArray}}
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        default:
          return state
    }
}

export default rootReducer