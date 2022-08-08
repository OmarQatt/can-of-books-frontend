import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Logout from './Auth/Logout.js'
import User from './Auth/User.js'
import LoginForm from './LoginForm.js'
import Profile from './Auth/Profile.js'

class App extends React.Component {
  render() {
    return (
      <>
       
          <Header />
          <LoginForm />
          <User />
         
          <Footer />
       
      </>
    )
  }
}

export default App;
