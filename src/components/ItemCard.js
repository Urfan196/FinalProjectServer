import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
 
const ItemCard = (props) => {
    
    const {title} = props.item

    return (
        <Link to='/item-info' onClick={() => props.selectedItem(props.item)} > 
            <div>
                <h5>{title}</h5> 
            </div>
        </Link>
    )
    
}

const mapsToDispatchProps = dispatch =>{
    return{
        selectedItem: (item) => dispatch({type: 'SET_SELECTED_ITEM', item: item})
    }
}

export default connect(null, mapsToDispatchProps)(ItemCard);