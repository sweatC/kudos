import React, { Component } from 'react';
import { patchesData } from '../data/test-data'
import ListOfUsersPatches from '../components/list-of-users-patches'


export default class UsersScreen extends Component {
	render() {
		return(
			<ListOfUsersPatches patchesData={patchesData} />
			);
	}
}