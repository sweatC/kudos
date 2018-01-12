import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import { kudosData } from '../data/test-data';
import ListOfKudos from '../components/list-of-kudos';


export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.getFullName = this.getFullName.bind(this);
	}
	render() {
		return (
			<View style={profileScreenStyles.container}>
				<View style={profileScreenStyles.header}>
					<Image style={profileScreenStyles.img} source={{ uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' }} />
					<Text style={profileScreenStyles.header_txt}>{this.getFullName()}</Text>
				</View>
				<View style={profileScreenStyles.recieved_kudos}>
					<Text style={profileScreenStyles.recieved_kudos_txt}>Recieved Kudos</Text>
					<ListOfKudos kudosData={kudosData} />
				</View>
			</View>
		);
	}

	getFullName() {
		const fName = this.props.screenProps.state.firstName;
		const lName = this.props.screenProps.state.lastName;
		return `${fName} ${lName}`;
	}
}

const profileScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	header: {
		flexDirection: 'row',
		marginTop: 30,
		backgroundColor: 'lightgrey',
		alignItems: 'center',
	},
	header_txt: {
		fontSize: 19,
		fontFamily: 'Roboto'
	},
	recieved_kudos: {
		flex: 10,
		marginTop: 7
	},
	recieved_kudos_txt: {
		fontSize: 32,
		fontFamily: 'Roboto',
		textAlign: 'center',
		fontWeight: '100'
	},
	img: {
		width: 100,
		height: 100
	}
});

