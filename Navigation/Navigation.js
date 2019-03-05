// Navigation/Navigation.js
import React, { Component } from "react";
import { createDrawerNavigator,createAppContainer  } from 'react-navigation'
import Home from '../Components/Home'
import Settings from '../Components/Settings'
import SideBar from "../Components/SideBar";
const drawer = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Homeeee'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }
    }
},
    {
        contentComponent: props => <SideBar {...props} />,
        initialRouteName:"Home"
    }
)
export default createAppContainer(drawer)