import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';


export default class WelcomeScreen extends Component {
	render() {
		return (
			<View style={welcomeScreenStyles.container}>
				<Image source={require('../img/tnku.jpg')} style={welcomeScreenStyles.img} />
				<View style={welcomeScreenStyles.text}>
					<Text style={welcomeScreenStyles.h}>Kudos</Text>
					<Text style={welcomeScreenStyles.p}>Your small gestures grtitude</Text>
				</View>
				<View style={welcomeScreenStyles.sign}>
					<View style={welcomeScreenStyles.btn}>
						<Text style={welcomeScreenStyles.btn_txt}
							onPress={() => this.props.navigation.navigate('SignIn')}>Sign in</Text>
					</View>
					<Text style={welcomeScreenStyles.bottom_btn_txt}
						onPress={() => this.props.navigation.navigate('SignUp')}
					>Don't have an account? Sign up</Text>
				</View>
			</View>
		);
	}
}

const welcomeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	h: {
		color: 'hsla(52, 75%, 6%, 0.91)',
		fontWeight: '400',
		fontSize: 28,
		textAlign: 'center',
		fontFamily: 'Roboto'
	},
	p: {
		color: 'hsla(52, 75%, 6%, 0.91)',
		fontWeight: '100',
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'Roboto',
		marginTop: 2
	},
	img: {
		flex: 4,
		resizeMode: Image.resizeMode.center
	},
	text: {
		flex: 2,
		marginTop: 40
	},
	sign: {
		flex: 3,
		marginTop: 15
	},
	btn: {
		height: 45,
		width: 250,
		backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
		borderRadius: 5,
	},
	btn_txt: {
		color: '#fff',
		textAlign: 'center',
		marginTop: 12
	},
	bottom_btn_txt: {
		color: 'hsla(52, 75%, 6%, 0.91)',
		fontSize: 10,
		textAlign: 'center',
		fontFamily: 'Roboto',
		marginTop: 7
	}
});
