import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, Alert } from 'react-native';


export default class SignOut extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    render() {
        const { firebase } = this.props;
        return (
            <View>
                <Text onPress={() => this.signOut(firebase)}>Sign Out</Text>
            </View>
        )     
    }

    signOut(firebase) {
        firebase.auth().signOut()
        .then(() => {
            Alert.alert('Sign-out successful');
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Welcome' })
                ]
            })
            this.props.navigator.dispatch(resetAction);
        })
        .catch(error => Alert.alert(`${error.message}: ${error.code}`))
    }
}