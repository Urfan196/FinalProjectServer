import React, { Component } from 'react';
import {connect} from 'react-redux'
import fetchNearLocations from '../actions/fetchNearLocations'

class Filter extends Component {

    state = {
        distance: 10,
        category: 'All'
    }
    
    handleSubmit = () => {
        const{currentUser} = this.props
        const {distance} = this.state
        fetchNearLocations(currentUser, distance)
    }

    handleClick = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                    <p>Choose range (mi):</p>
                    <input type="radio" name='distance' onClick ={this.handleClick} defaultChecked={this.state.distance} />10
                    <input type="radio" name='distance' onClick ={this.handleClick}/>20
                    <input type="radio" name='distance' onClick ={this.handleClick}/>30
                    <input type="radio" name='distance' onClick ={this.handleClick}/>40
                    <input type="radio" name='distance' onClick ={this.handleClick}/>50
                    </div>
                    <div>
                    <p>Choose category:</p>
                    <input type="radio" name='category' onClick ={this.handleClick} defaultChecked = {this.state.category}/>All
                    <input type="radio" name='category' onClick ={this.handleClick}/>food
                    <input type="radio" name='category' onClick ={this.handleClick}/>non-food
                    </div>
                    <br/><input type="submit" value="Apply Filter" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        locations: state.locations
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        fetchNearLocations: (user, distance) => dispatch(fetchNearLocations(user, distance))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(Filter) ;
