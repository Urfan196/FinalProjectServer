const editItem = (e, state, id, history) => {
    e.preventDefault();

    return (dispatch) => {
        return fetch(`http://localhost:3000/items/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: state.title,
                description: state.description
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: 'EDIT_SELECTED_ITEM', item: data.item})
            dispatch({type: 'EDIT_ITEM_OF_CURRENT_USER', item: data.item})
            history.push('/profile')
        })
    }
}

export default editItem;
