import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'

class EditProfile extends Component {


    render() {
        return (
            <div>
                {<Navbar/>}
                <form>

                    {/* <label htmlFor="firstName">First Name</label>
                    <br/><input name="firstName" value={firstName} onChange={this.handleChange}/>
                    <br/><label htmlFor="lastName">Last Name</label>
                    <br/><input name="lastName" value={lastName} onChange={this.handleChange}/>
                    <br/><label htmlFor="birthday">Birthday</label>
                    <br/><input type='date' name="birthday" value={birthday} onChange={this.handleChange}/>
                    <br/><label htmlFor="email">Email</label>
                    <br/><input type='email' name="email" value={email} onChange={this.handleChange}/>
                    <br/><label htmlFor="password">Password</label>
                    <br/><input type='password' name="password" value={password} onChange={this.handleChange}/>

                    <br/><input type="submit" value="Next"></input> */}

                </form>
            </div>
        );
    }

}

const mapsStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapsStateToProps)(EditProfile);
