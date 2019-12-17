import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
            <Link to='/edit-profile'><button>Edit Profile</button></Link>

            <h1>Your Listings:</h1>
            {items.map(item => <ListingCard key={item.id} item={item} />)}

        </div>
    )
 
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Profile);