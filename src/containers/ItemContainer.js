import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Filter from './Filter'
import ItemCard from '../components/ItemCard'



const ItemContainer = (props) => {

    return (
        <div>
            {<Navbar/>}
            {<Filter/>}
            {props.items.map(item => <ItemCard key={item.id} item={item}/> )}
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemContainer);
