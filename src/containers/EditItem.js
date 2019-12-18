import React, { Component } from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import editItem from '../actions/editItem'
import deleteItem from '../actions/deleteItem'

class EditItem extends Component {

    state = {
        title: this.props.selectedItem.title,
        description: this.props.selectedItem.description
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    } 

    render() {
        const {title, description} = this.state
        const {selectedItem, history, deleteItem, editItem} = this.props
        const {id} = selectedItem
        return (
            <div>
                {<Navbar/>}
                <form onSubmit={(e) => editItem(e, this.state, id, history)}>
                    <label htmlFor="title">Title:</label>
                    <br/><input name="title" value={title} onChange={this.handleChange}/>
                    <br/><label htmlFor="description">Description</label>
                    <br/><input name="description" value={description} onChange={this.handleChange}/>

                    <br/><input type="submit" value="Update"></input>
                </form>
                <button onClick={(e) => deleteItem(e, selectedItem, history)}>Delete Item</button>
            </div>
        );
    } 
}

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        editItem: (e, state, id, history) => dispatch(editItem(e, state, id, history)),
        deleteItem: (e, item, history) => dispatch(deleteItem(e, item, history))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(EditItem);
