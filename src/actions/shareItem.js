const shareItem = (e, history, user, state) => {
    e.preventDefault()

    const {title, description, category, image} = state

    const formData = new FormData()
    formData.append('item[title]', title)
    formData.append('item[description]', description)
    formData.append('item[category]', category)
    formData.append('item[image]', image)
    formData.append('item[available]', true)
    formData.append('item[user_id]', user.id)
     
    return (dispatch) => {
        return fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
            "Authorization": `${localStorage.getItem('jwt')}`},
        body: formData
        })
        .then (resp => resp.json())
        .then (item => {
            dispatch({type: 'ADD_NEW_ITEM', item })
            history.push('/profile')
        })
    }
}


export default shareItem