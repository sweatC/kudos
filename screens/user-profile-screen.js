import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ProfileTabNav from '../navigation/profile-tab-navigator'


export default class UserProfileScreen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ProfileTabNav screenProps={{ state: this.props.navigation.state.params }} />
		);
	}
}