import React from 'react';
import './App.css';
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import SignUpAddress from './containers/SignUpAddress'
import UpdateUserInfo from './containers/UpdateUserInfo'
import ItemContainer from './containers/ItemContainer'
import ShareItem from './containers/ShareItem'
import MessageContainer from './containers/MessageContainer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ItemInfo from './components/ItemInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class App extends React.Component {


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/signup' component={SignUpUser}/>
            <Route exact path='/home' component={ItemContainer}/>
            <Route exact path='/signupuser' component={SignUpUser}/>
            <Route exact path='/signupaddress' component={SignUpAddress}/>

          </Switch>
        </Router>
      </div>
    );
  }



}
  

export default App;
