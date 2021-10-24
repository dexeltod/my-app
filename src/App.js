import React from 'react'
import './App.css'
import Null from './null.css'
import Profile from './components/Profile/ProfileFeed/profileFeed'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import MenuNavigation from './components/Menu/menu'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'



function App(props) {
  debugger;
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper__container">
          <div class="app-wrapper__app">
            <Header />
            <MenuNavigation />
            <Route path="/profile" render={() => <Profile updateNewPost={props.updateNewPost} profileState={props.state.getProfilePage()} addPost={props.addPost} />} />
            <Route path="/dialogs" render={() => <Dialogs dialogState={props.state.getDialogPage()} />} />
          </div>
        </div>

        <div class="app-wrapper__footer"><Footer /></div>
      </div>
    </BrowserRouter>
  )

}

export default App
