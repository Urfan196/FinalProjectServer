import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import ListingCard from './ListingCard'

const Profile = (props) => {

    const {first_name, last_name, birth_day, email, address, items} = props.currentUser

    return (
        <div>
            {<Navbar/>}
            <h1>{first_name + ' ' + last_name}</h1>
            <p>{birth_day}</p>
            <p>{email}</p>
            <p>{address}</p>
            <button>Edit Profile</button>

            <h1>Your Listings:</h1>
            {items.map(item => <ListingCard item={item} />)}

        </div>
    )
 
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Profile);