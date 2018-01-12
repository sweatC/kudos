import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
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
	}

  	render() {
    	return(
      		<RootNavigator screenProps={{state: this.state, setUser: this.setSource}}/>
      	);
	}
	  
	setSource(user) {
		this.setState({user});
		AsyncStorage.setItem("user", JSON.stringify(user));
	}
}
