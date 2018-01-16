import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { config } from './data/config';
import RootNavigator from './navigation/root-navigator';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
		this.setSource = this.setSource.bind(this);
		this.firebase = firebase.initializeApp(config);
	}

	render() {
		return (
			<RootNavigator screenProps={{ state: this.state, 
				setUser: this.setSource, 
				firebase: this.firebase}} />
		);
	}

	setSource(user) {
		this.setState({ user });
		AsyncStorage.setItem("user", JSON.stringify(user));
	}
}
