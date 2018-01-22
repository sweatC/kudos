import React from 'react';
import * as firebase from 'firebase';
import { config } from './data/config';
import RootNavigator from './navigation/root-navigator';
import ProfileTabNav from './navigation/profile-tab-navigator';
import UserProfileScreen from './screens/user-profile-screen';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		console.ignoredYellowBox = [
			'Setting a timer'
		];
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
			<RootNavigator screenProps={{
				state: this.state,
				setUser: this.setSource,
				firebase: this.firebase
			}} />
		);
	}

	setSource(user) {
		this.setState({ user });
		this.firebase.database().ref(`users/${user.id}`).set({
			userInfo: {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				password: user.password
			}
		})
	}
}
