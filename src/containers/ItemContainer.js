import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Filter from './Filter'
import ItemCard from '../components/ItemCard'
import fetchNearLocations from '../actions/fetchNearLocations'



class ItemContainer extends Component {

    componentDidMount () {
        this.props.fetchNearLocations(this.props.currentUser)
    }
    
    render () {  

        return (
            <div>
                {<Navbar/>}
                {<Filter/>}
                {
                this.props.locations. map (obj => {
                    const {location, distance, items} = obj
                    const itemCard = items.map(item => item.available && <ItemCard key={item.id} item={item} distance={distance} location={location}/>)
                    return itemCard
                })
                }
            </div>
        )
    }
     
}

const mapStateToProps = state => {
    return {
        items: state.items, 
        currentUser: state.currentUser,
        locations: state.locations
    }
}

const mapsToDispatchProps = dispatch => {
    return{
      fetchNearLocations: (user,distance) => dispatch(fetchNearLocations(user, distance))
    }
  }

export default connect(mapStateToProps, mapsToDispatchProps)(ItemContainer);
