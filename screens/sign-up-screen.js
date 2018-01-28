import React, { Component } from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	ActivityIndicator
} from 'react-native';



export default class SignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...this.props.screenProps.state,
			loading: false
		}
		this.signUp = this.signUp.bind(this);
		this.renderCurrentState = this.renderCurrentState.bind(this);
	}
	render() {
		return (
			<View style={this.state.loading ?signUpScreenStyles.loader :signUpScreenStyles.container}>
				{this.renderCurrentState()}
			</View>
		);
	}
	signUp() {
		this.setState({ loading: true });
		const { firebase, setUser } = this.props.screenProps;
		firebase.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				this.setState({ loading: false });
				setUser({ ...this.state, 
					id: firebase.auth().currentUser.uid});
				const { navigation } = this.props;
				navigation.navigate('UserProfile',
				{ ...this.state, firebase });
			})
			.catch(error => {
				this.setState({ loading: false });
				switch (error.code) {
						case "auth/email-already-in-use":
						Alert.alert("The email is already in use.");
						break;
					case "auth/invalid-email":
						Alert.alert("The specified email is not a valid email.");
						break;
					case "auth/invalid-password":
						Alert.alert("Password is invalid it must contains  at least six characters.");
						break;
					default:
						Alert.alert(`Error: ${error.code.split('/')[1]}`);
				}
			});
	}

	renderCurrentState() {
		if (this.state.loading) {
			return (
				<View>
					<ActivityIndicator size='large' color='hsla(52, 75%, 6%, 0.91)' />
				</View>
			)
		}
		return(
			<View>
				<View style={signUpScreenStyles.inputs}>
					<FormLabel labelStyle={[signUpScreenStyles.color, signUpScreenStyles.font]}>First Name</FormLabel>
					<FormInput onChangeText={firstName => this.setState({ firstName })}
						underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signUpScreenStyles.color, signUpScreenStyles.font, signUpScreenStyles.input]} />
					<FormLabel labelStyle={[signUpScreenStyles.color, signUpScreenStyles.font]}>Last Name</FormLabel>
					<FormInput underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signUpScreenStyles.color, signUpScreenStyles.font, signUpScreenStyles.input]}
						onChangeText={lastName => this.setState({ lastName })} />
					<FormLabel labelStyle={[signUpScreenStyles.color, signUpScreenStyles.font]}>Email</FormLabel>
					<FormInput onChangeText={email => this.setState({ email })}
						underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signUpScreenStyles.color, signUpScreenStyles.font, signUpScreenStyles.input]} />
					<FormLabel labelStyle={[signUpScreenStyles.color, signUpScreenStyles.font]}>Password</FormLabel>
					<FormInput secureTextEntry={true}
						underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signUpScreenStyles.color, signUpScreenStyles.font, signUpScreenStyles.input]}
						onChangeText={password => this.setState({ password })} />
				</View>
				<View style={signUpScreenStyles.sign}>
					<Button
						buttonStyle={signUpScreenStyles.btn}
						large
						fontFamily='Roboto'
						iconRight={{ name: 'face', color: '#fff' }}
						title='Sign Up'
						onPress={() => this.signUp()} />
				</View>
			</View>
		)
	}
}

const signUpScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	loader: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	inputs: {
		paddingTop: '5%'
	},
	btn: {
		marginTop: '3%',
		height: '10%',
		width: '40%',
		backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
		borderRadius: 5,
		marginLeft: '30%',
		marginRight: '30%'
	},
	input: {
		padding: '2%'
	},
	color: {
		color: 'hsla(52, 75%, 6%, 0.91)'
	},
	font: {
		fontFamily: 'Roboto'
	}
});
