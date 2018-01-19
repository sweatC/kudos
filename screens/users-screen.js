import React, { Component } from 'react';
import { patchesData } from '../data/test-data'
import ListOfUsersPatches from '../components/list-of-users-patches'


export default class UsersScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user:{
				id: props.screenProps.state.id,
				firstName: props.screenProps.state.firstName,
				lastName: props.screenProps.state.lastName
			},
			users: []
		}
	}
	componentWillMount() {
		const { firebase } = this.props.screenProps.state;

		firebase.database()
			.ref()
			.on('value', snap => {
				const users = [];
				snap.forEach( usr => {
					users.push({
						key: usr.val().userInfo.id,
						firstName: usr.val().userInfo.firstName,
						lastName: usr.val().userInfo.lastName
					})
				})
				this.setState({ users });
			})
	}
	render() {
		return (
			<ListOfUsersPatches patchesData={this.state.users} />
		);
	}
}