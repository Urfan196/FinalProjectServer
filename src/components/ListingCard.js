import React, {Component} from 'react'


class ListingCard extends Component {

    

    handleClick = () => {
        const {id, available} = this.props.item
        fetch(`http://localhost:3000/items/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                available: !available
            })
        })
    }

    render () {
        const {title, available} = this.props.item
        return(
            <div>
                <p>{title}</p>
                <button>Edit Profile</button>
                {available ? <button onClick = {this.handleClick}>Available</button> : <button onClick = {this.handleClick}> Not Available </button>}
                
                <button>Delete</button>
            </div>
        )
    }
    
}

export default ListingCard