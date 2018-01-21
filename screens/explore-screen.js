import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListOfKudos from '../components/list-of-kudos';


export default class ExploreScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			kudos: []
		}
	}
	componentWillMount() {
		const { firebase } = this.props.screenProps.state;

		firebase.database().ref(`kudos`).on('value', snap => {
			const kudos = [];
			snap.forEach( kudo => {
				kudos.push({
					key: kudo.val().key,
					img: {
						uri: kudo.val().img
					},
					text: kudo.val().text
				})
			})
			this.setState({kudos})
		})
	}

	render() {
		return (
			<ListOfKudos kudosData={this.state.kudos} />
		);
	}
}