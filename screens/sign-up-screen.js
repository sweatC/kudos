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

	cFirstName(fName, input) {
		if (checkFirstName(fName)) {
			this.fNameInput.props.underlineColorAndroid = 'green';
			this.setState({ firstName: fName })
		}
		this.fNameInput.props.underlineColorAndroid = 'red';
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
		const errStates = [];
		for (p in this.state) {
			if (this.state[p] === '') {
				errStates.push(p);
			}
		}
		if (errStates.length < 2) { // 1 cos loading
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
					Alert.alert(`${error.message}: ${error.code}`);
				});
		}
		else {
			let checkout = 'Invalid: ';
			errStates.forEach(err => {
				switch(err) {
					case 'firstName':
						checkout += 'First Name, ';
						break;
					case 'lastName':
						checkout += 'Last Name, ';
						break;
					case 'email':
						checkout += 'Email, ';
						break;
					case 'password':
						checkout += 'Password';
						break;
				}
			})
			Alert.alert(checkout);
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
						ref={node => this.fNameInput = node}
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
						ref={node => this.EmailInput = node}
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
