import React, { Component } from 'react';
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
			<View style={signUpScreenStyles.container}>
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
					<ActivityIndicator size='large' color="#0000ff" />
				</View>
			)
		}
		return(
			<View>
				<View style={signUpScreenStyles.inputs}>
					<TextInput
						style={signUpScreenStyles.input}
						placeholder="First Name"
						onChangeText={firstName => this.setState({firstName})}
					/>
					<TextInput
						style={signUpScreenStyles.input}
						placeholder="Last Name"
						onChangeText={lastName => this.setState({lastName})}
					/>
					<TextInput
						style={signUpScreenStyles.input}
						placeholder="Email"
						onChangeText={email => this.setState({email})}
					/>
					<TextInput
						secureTextEntry={true}
						style={signUpScreenStyles.input}
						placeholder="Password"
						onChangeText={password => this.setState({password})}
					/>
				</View>
				<View style={signUpScreenStyles.sign}>
					<View style={signUpScreenStyles.btn}>
						<Text style={signUpScreenStyles.btn_txt}
							onPress={() => this.signUp()}>Sign up</Text>
					</View>
				</View>
			</View>
		)
	}
}

const signUpScreenStyles = StyleSheet.create({
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
