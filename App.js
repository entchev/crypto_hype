import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrendingScreen from './src/screens/TrendingScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import DetailScreen from './src/screens/DetailScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import MainScreen from './src/screens/MainScreen'
import FavouritesScreen from './src/screens/FavouritesScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    WelcomeScreen: WelcomeScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Home: createStackNavigator({
      MainScreen: MainScreen,
      DetailScreen: DetailScreen,
    }),
    Profile: ProfileScreen,
    Favourites: FavouritesScreen,
    Trending: TrendingScreen,
  }),
})

export default createAppContainer(switchNavigator)
