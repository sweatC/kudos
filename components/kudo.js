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
				<View style={kudoStyles.txt_container}>
					<Text style={kudoStyles.txt}>{this.props.txt}</Text>
				</View>
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
		padding: '2%',
		marginBottom: '5%'
	},
	img: {
		width: Dimensions.get('window').width - 20,
		height: 200
	},
	txt_container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: Dimensions.get('window').width - 20,
		backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
		padding: '2%',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	txt: {
		fontSize: 16,
		fontFamily: 'Roboto',
		color: '#fff'
	}
});