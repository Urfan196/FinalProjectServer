import React, { Component } from 'react';
import {connect} from 'react-redux'

export class SignUpAddress extends Component {

    state = {
        street: '',
        city: '',
        zip: '',
        state: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit = (e, stateInfo, history, currentUser) => {
        e.preventDefault();
        const {street, city, zip, state} = stateInfo
        fetch('http://localhost:3000/locations',{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                    address: street + city + zip + state,
                    user_id: currentUser.id
            })
        })
        .then(() => history.push('/home')) //dispatch elave et
    }

    render() {
       const { street, city, zip, state } = this.state
       const {currentUser, history} = this.props

        return (
            <div>
                <h1>Add your address</h1>
                <form onSubmit={(e) => this.handleSubmit(e, this.state, history, currentUser)}>
                    <label htmlFor="street">Street</label>
                    <br/><input name="street" value={street} onChange={this.handleChange}/>
                    <br/><label htmlFor="city">City</label>
                    <br/><input name="city" value={city} onChange={this.handleChange}/>
                    <br/><label htmlFor="zip">Zip</label>
                    <br/><input name="zip" value={zip} onChange={this.handleChange}/>
                    <br/><label htmlFor="state">State</label>
                    <br/><input type='state' name="state" value={state} onChange={this.handleChange}/>
                    <br/><input type="submit" value="Sign Up"></input>
                </form>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
  }


export default connect(mapStateToProps)(SignUpAddress);
