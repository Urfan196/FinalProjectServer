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
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        case 'DELETE_USER':
            const deletedArray = state.users.filter(user => user.id !== action.user.id)
            return {...state, users: deletedArray}
        case 'SET_ALL_ITEMS':
            return {...state, items: action.items }
        case 'SET_SELECTED_ITEM':
            return {...state, selectedItem: action.item}
        case 'ADD_NEW_ITEM':
            const user = state.currentUser
            return {...state, currentUser: {...user, items:[...user.items, action.item]}}
        case 'EDIT_ITEM_OF_CURRENT_USER':
            const newArray = state.currentUser.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                }
            })
            return {...state, currentUser: {...state.currentUser, items: newArray}}
        case 'CHANGE_ITEM_AVAILABILITY':
            const availArray = state.currentUser.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                }
            })
            return {...state, currentUser: {...state.currentUser, items: availArray}}
        case 'DELETE_ITEM':
            const filteredArray = state.currentUser.items.filter(item => item.id !== action.item.id)
            return {...state, currentUser: {...state.currentUser, items: filteredArray}}
        default:
            return state
    }
}

export default rootReducer