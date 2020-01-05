import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar.jsx'
import SignIn from './signIn.jsx'
import SignUp from './signUp.jsx'
import Profile from './profile.jsx'
import {UserProvider} from './contexts/userContext.js';
import styles from '../assets/main.scss';

const App = (props) => {
  // use state to pass onto the provider
  
  return(

    <div>
      <NavBar/>
      {/* <UserProvider value={{ username: user.username, shelves: user.shelves, addUserInfo, addShelf }}> */}
      <div id="primary-container">
        <Route exact path = '/' render={(props)=>(<SignIn {...props} />)}/>
        <Route path = '/signUp' render={(props)=>(<SignUp {...props} />)}/>
        <Route path = '/profile' render={(props)=>(<Profile {...props}/>)} />
      {/* </UserProvider> */}
      </div>
    </div>
  );
}

export default App;