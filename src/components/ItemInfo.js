import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'

const ItemInfo = (props) => {

    const {title, description, available} = props.selectedItem
    const {first_name, last_name, address } = props.selectedItem.user

    return (
        <div>
            {<Navbar/>}
            <h5>Title: {title}</h5>
            <p>Description: {description}</p>
            {available ? <p>Available</p> : <p>Not Available</p> }

            <p>{first_name + ' ' +last_name }</p>
            <p>Address: {address}</p>

            <button>Message {first_name}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem
    }
}

export default connect(mapStateToProps)(ItemInfo)