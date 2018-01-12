import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	AsyncStorage
} from 'react-native';


export default class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	render() {
		return (
			<View style={signInScreenStyles.container}>
				<View style={signInScreenStyles.inputs}>
					<TextInput
						style={signInScreenStyles.input}
						placeholder="Email"
						onChangeText={email => this.setState({ email })}
					/>
					<TextInput
						secureTextEntry={true}
						style={signInScreenStyles.input}
						placeholder="Password"
						onChangeText={password => this.setState({ password })}
					/>
				</View>
				<View style={signInScreenStyles.sign}>
					<View style={signInScreenStyles.btn}>
						<Text style={signInScreenStyles.btn_txt}
							onPress={() => this.signIn()}>Sign in</Text>
					</View>
				</View>
			</View>
		);
	}

	signIn() {
		AsyncStorage.getItem("user").then((json) => {
			try {
				const user = JSON.parse(json);
				if (this.state.email == user.email &&
					this.state.password == user.password) {
					this.props.navigation.navigate('UserProfile', user);
				}
			} catch (e) { }
		})
	}
}

const signInScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputs: {
		paddingTop: 70
	},
	input: {
		height: 45,
		width: 250,
		fontWeight: '400',
		fontSize: 28,
		textAlign: 'center',
		fontFamily: 'Roboto',
		color: 'hsla(52, 75%, 6%, 0.91)',
		marginTop: 5
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
	}
});
