const shareItem = (e, history, user, state) => {
    e.preventDefault()

    const {title, description, category} = state

    return(dispatch) => {
        fetch('http://localhost:3000/items', {
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title,
                description,
                category,
                available: true,
                user_id: user.id
            })
        })
        .then (resp => resp.json())
        .then (item => {
            dispatch({type: 'ADD_NEW_ITEM', item })
            history.push('/profile')
        })
    }
}

export default shareItem

