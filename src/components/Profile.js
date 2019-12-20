import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from '../containers/Navbar'
import ListingCard from './ListingCard'

const Profile = (props) => {

    const {id, first_name, last_name, birthday, email, address} = props.currentUser
    const filteredArray = props.items.filter(item => item.user_id == id)

    return (
        <div>
            {<Navbar/>}
            <h1>{first_name + ' ' + last_name}</h1>
            <p>{birthday}</p>
            <p>{email}</p>
            <p>{address}</p>
            <Link to='/edit-profile'><button>Edit Profile</button></Link>

            <h1>Your Listings:</h1>
            {filteredArray.map(item => <ListingCard key={item.id} item={item} history={props.history} />)}

        </div> 
    )
  
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        items: state.items
    }
}

export default connect(mapStateToProps)(Profile);