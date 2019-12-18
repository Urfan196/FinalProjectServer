import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Filter from './Filter'
import ItemCard from '../components/ItemCard'



const ItemContainer = (props) => {

    const noCurrentUserArray = props.items.filter(item => item.user_id !== props.currentUser.id)
    const availArray = noCurrentUserArray.filter(item => item.available == true)
    
    return (
        <div>
            {<Navbar/>}
            {<Filter/>}
            {
            availArray.map(item => <ItemCard key={item.id} item={item}/> )
            }
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        items: state.items, 
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(ItemContainer);
