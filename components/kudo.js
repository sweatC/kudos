import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions
} from 'react-native';

export default class Kudo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={kudoStyles.container}>
				<Image style={kudoStyles.img} source={this.props.img} />
				<Text style={kudoStyles.txt}>{this.props.txt}</Text>
			</View>
		);
	}
}

const kudoStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		padding: '2%'
	},
	img: {
		width: Dimensions.get('window').width - 20,
		height: 200
	},
	txt: {
		fontSize: 16,
		fontFamily: 'Roboto'
	}
});