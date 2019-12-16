const signUpUser = (e, state, history) => {
    e.preventDefault();

    return (dispatch) => {
        fetch('http://localhost:3000/users',{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    first_name: state.firstName,
                    last_name: state.lastName,
                    birth_day: state.birthday,
                    email: state.email,
                    password: state.password 
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({ type: "SET_CURRENT_USER", user: data.user })
            dispatch({ type: "ADD_USER", user: data.user })
            localStorage.setItem('jwt', data.jwt)
            history.push('/signupaddress')
        })
    }


}

export default signUpUser