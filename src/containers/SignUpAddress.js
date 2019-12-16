import React, { Component } from 'react';

export class SignUpAddress extends Component {

    state = {
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
       const { firstName, lastName, birthday, email, password } = this.state
        return (
            <div>

                <form onSubmit={(e) => this.props.signUpUser(e, this.state, this.props.history)}>
                    <label htmlFor="firstName">First Name</label>
                    <br/><input name="firstName" value={firstName} onChange={this.handleChange}/>
                    <br/><label htmlFor="lastName">Last Name</label>
                    <br/><input name="lastName" value={lastName} onChange={this.handleChange}/>
                    <br/><label htmlFor="birthday">Birthday</label>
                    <br/><input type='date' name="birthday" value={birthday} onChange={this.handleChange}/>
                    <br/><label htmlFor="email">Email</label>
                    <br/><input type='email' name="email" value={email} onChange={this.handleChange}/>
                    <br/><label htmlFor="email">Password</label>
                    <br/><input type='password' name="password" value={password} onChange={this.handleChange}/>

                    <br/><input type="submit" value="Next"></input>
                </form>
                
            </div>
        );
    }
    
}

export default SignUpAddress;
