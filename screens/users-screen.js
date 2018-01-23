import React, { Component } from 'react';
import ListOfUsersPatches from '../components/list-of-users-patches';


export default class UsersScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
		this.fetchUsers = this.fetchUsers.bind(this);
	}
	componentWillMount() {
		this.fetchUsers();
	}
	render() {
		return (
			<ListOfUsersPatches firebase={this.props.screenProps.state.firebase}
			patchesData={this.state.users} navigator={this.props.navigation} 
			fetchUsers={this.fetchUsers} />
		);
	}

	fetchUsers(callback=()=>'') {
		const { firebase } = this.props.screenProps.state;

		firebase.database()
			.ref(`users`)
			.on('value', snap => {
				const users = [];
				snap.forEach(usr => {
					users.push({
						key: usr.val().userInfo.id,
						firstName: usr.val().userInfo.firstName,
						lastName: usr.val().userInfo.lastName,
						count: Object.keys(Object(usr.val().userKudos)).length
					})
				})
				this.setState({ users });
				callback();
			})
	}
}