import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
            header: null,
            headerRight: (<View>
                <Text >Send</Text>
            </View>)
        }
    }
});

export default UsersNavigator;