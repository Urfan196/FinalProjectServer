import React, { Component } from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
import shareItem from '../actions/shareItem'

class ShareItem extends Component {

    state = {
        title: '',
        description: '',
        category: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }) 
    }

    render() {
        const {title, description}  = this.state
        const {shareItem, history, currentUser} = this.props

        return (
            <div>
                {<Navbar/>}
                <h4>Share Item</h4>

                <form onSubmit={(e) => shareItem(e, history, currentUser, this.state) }>
                    <label htmlFor="title">Title:</label>
                    <br/><input name="title" value={title} onChange={this.handleChange}/>
                    <br/><label htmlFor="description">Description:</label>
                    <br/><input name="description" value={description} onChange={this.handleChange}/>

                    <br/><label>Category:</label>
                    <br/><select name="category" onChange={this.handleChange}>
                        <option value="food">food</option>
                        <option value="non-food">non-food</option>
                    </select>

                    <br/><input type="submit" value="Share Item"/>
                </form>
                
            </div>
        );
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        shareItem: (e, history, user, state) => {dispatch(shareItem(e, history, user, state))}
    }
} 

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps, mapsToDispatchProps)(ShareItem);
