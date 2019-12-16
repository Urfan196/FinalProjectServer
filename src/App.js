import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import SignUpAddress from './containers/SignUpAddress'
import UpdateUserInfo from './containers/UpdateUserInfo'
import ItemContainer from './containers/ItemContainer'
import ShareItem from './containers/ShareItem'
import MessageContainer from './containers/MessageContainer'
import Profile from './components/Profile'
import ItemInfo from './components/ItemInfo'
import fetchAllItems from './actions/fetchAllItems'
import fetchAllUsers from './actions/fetchAllUsers'
import './App.css';



class App extends React.Component {

  componentDidMount () {
      this.props.fetchAllItems()
      this.props.fetchAllUsers()
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component ={Welcome}/>
            <Route exact path='/home' component={ItemContainer}/>
            <Route exact path='/signup' component={SignUpUser}/>
            <Route exact path='/signup-user' render={props => <SignUpUser {...props}/>} />
            <Route exact path='/signup-address' component={SignUpAddress}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/messages' component={MessageContainer}/>
            <Route exact path='/share-item' component={ShareItem}/>
            <Route exact path='/item-info' component={ItemInfo}/>
          </Switch>
        </Router>
      </div>
    );
  }



}
  
const mapsToDispatchProps = dispatch => {
  return{
    fetchAllItems: ()=> dispatch(fetchAllItems()),
    fetchAllUsers: ()=> dispatch(fetchAllUsers())
  }
}
  
export default connect(null, mapsToDispatchProps)(App);
