import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { kudosData } from '../data/test-data';
import ListOfKudos from '../components/list-of-kudos';


export default class ExploreScreen extends Component {
	render() {
		return (
			<ListOfKudos kudosData={kudosData} />
		);
	}
}