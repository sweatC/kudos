import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert
} from 'react-native';


export default class UserPatch extends Component {
	constructor(props) {
		super(props);
		this.sendKudo = this.sendKudo.bind(this);
	}

	render() {
		return (
			<View style={userPatchStyles.container}>
				<View style={userPatchStyles.text_wrapper}>
					<Text style={userPatchStyles.name_txt}>{this.props.fullName}</Text>
					<Text style={userPatchStyles.kudos_count_txt}>{`has ${this.props.count} kudos`}</Text>
				</View>
				<View style={userPatchStyles.ico}>
					<Icon onPress={() => this.sendKudo(this)} 
						name='arrow-right' 
						type='font-awesome' 
						color='hsla(52, 75%, 6%, 0.91)' />
				</View>
			</View>
		);
	}

	sendKudo(reciever) {
		const { nav, usr, firebase } = this.props;
		nav.navigate('SendKudo', {
			...usr,
			firebase
		});
	}
}

const userPatchStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		padding: '5%',
		backgroundColor: 'lightgrey',
		marginBottom: '5%'
	},
	text_wrapper: {
		paddingTop: '2%',
		marginLeft: '3%',
		marginRight: '20%'
	},
	name_txt: {
		color: 'hsla(52, 75%, 6%, 0.91)',
		fontSize: 16,
		fontFamily: 'Roboto',
		fontWeight: '100'
	},
	kudos_count_txt: {
		fontSize: 16,
		color: '#8c9399',
		fontFamily: 'Roboto',
		fontWeight: '100'
	},
	ico: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-end'
	}
})