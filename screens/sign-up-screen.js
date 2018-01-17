import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	ActivityIndicator
} from 'react-native';
import {
	checkFirstName,
	checkLastName,
	checkEmail,
	checkPassword
} from '../functions/sign-up-validations';



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

	cFirstName(fName) {
		if (checkFirstName(fName)) {
			this.setState({ firstName: fName })
		}
	}

	cLastName(lName) {
		if (checkLastName(lName)) {
			this.setState({ lastName: lName })
		}
	}

	cEmail(email) {
		if (checkEmail(email)) {
			this.setState({ email: email })
		}
	}

	cPassword(pass) {
		if (checkPassword(pass)) {
			this.setState({ password: pass })
		}
	}

	signUp() {
		this.setState({loading: true});
		const errStates = [];
		for (p in this.state) {
			if (this.state[p] == '') {
				errStates.push(p);
			}
		}
		if (errStates.length == 0) {
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
					Alert.alert(`${error.message}: ${error.code}`);
				});
		}
		else {
			Alert.alert(`Check out ${errStates} fields!`);
		}
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
						onChangeText={fName => this.cFirstName(fName)}
					/>
					<TextInput
						style={signUpScreenStyles.input}
						placeholder="Last Name"
						onChangeText={lName => this.cLastName(lName)}
					/>
					<TextInput
						style={signUpScreenStyles.input}
						placeholder="Email"
						onChangeText={email => this.cEmail(email)}
					/>
					<TextInput
						secureTextEntry={true}
						style={signUpScreenStyles.input}
						placeholder="Password"
						onChangeText={password => this.cPassword(password)}
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
