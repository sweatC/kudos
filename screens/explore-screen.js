import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListOfKudos from '../components/list-of-kudos';


export default class ExploreScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			kudos: []
		}
		this.fetchKudos = this.fetchKudos.bind(this);
	}
	componentWillMount() {
		this.fetchKudos();
	}

	render() {
		return (
			<ListOfKudos kudosData={this.state.kudos} fetchKudos={this.fetchKudos} />
		);
	}

	fetchKudos(callback=()=> '') {
		const { firebase } = this.props.screenProps.state;

		firebase.database().ref(`kudos`).on('value', snap => {
			const kudos = [];
			snap.forEach(kudo => {
				kudos.push({
					key: kudo.val().key,
					img: {
						uri: kudo.val().img
					},
					text: kudo.val().text
				})
			})
			this.setState({ kudos });
			callback();
		})
	}
}