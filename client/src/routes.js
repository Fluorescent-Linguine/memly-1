//File contains the route setup to be exported to be used by App.js
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import MyMemlysContainer from './containers/MyMemlysContainer'
import LikedMemlysContainer from './containers/LikedMemlysContainer'
import ProfileContainer from './containers/ProfileContainer'
import GoogleMapContainer from './containers/GoogleMapContainer';
import ImageUploadContainer from './containers/ImageUploadContainer'


var routes = (
    <Router history={hashHistory}>
      <Route path='/' component={HomeContainer}>
        <IndexRoute component={GoogleMapContainer}/>
        <Route path='user/profile' component = {ProfileContainer}>
          <IndexRoute component = {MyMemlysContainer} />
          <Route path='/likedmemlys' component = {LikedMemlysContainer} />
        </Route>
        <Route path='/photo' component={ImageUploadContainer} />
      </Route>
    </Router>
  )

export default routes

