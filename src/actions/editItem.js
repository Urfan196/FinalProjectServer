const editItem = (e, state, id, history) => {
    e.preventDefault();
    const {title, description, category, image} = state

    const formData = new FormData()
    formData.append('item[title]', title)
    formData.append('item[description]', description)
    formData.append('item[category]', category)
    formData.append('item[image]', image)

    return (dispatch) => {
        return fetch(`http://localhost:3000/items/${id}`, {
        method: 'PATCH',
        headers: {
            "Authorization": `${localStorage.getItem('jwt')}`},
        body: formData
        })
        .then(resp => resp.json())
        .then(item => {
            dispatch({type: 'SET_SELECTED_ITEM', item: item})
            dispatch({type: 'EDIT_ITEM_OF_CURRENT_USER', item: item})
            history.push('/profile')
        })
    }   
}

export default editItem;







// return (dispatch) => {
//     return fetch(`http://localhost:3000/items/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Authorization": `${localStorage.getItem('jwt')}`,
//             "Content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             title: state.title,
//             description: state.description
//         })
//     })