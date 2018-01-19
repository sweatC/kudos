import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import UsersScreen from '../screens/users-screen';
import SendKudoScreen from '../screens/send-kudo-screen';


const UsersNavigator = StackNavigator({
    Users: {
        screen: UsersScreen,
        navigationOptions: {
            header: null
        }
    },
    SendKudo: {
        screen: SendKudoScreen,
        navigationOptions: {
            title: 'Create Kudo'
        }
    }
});

export default UsersNavigator;