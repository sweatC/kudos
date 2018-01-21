import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Alert,
	ActivityIndicator
} from 'react-native';


export default class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			loading: false
		};
		this.signIn = this.signIn.bind(this);
		this.renderCurrentState = this.renderCurrentState.bind(this);
	}
	render() {
		return (
			<View style={signInScreenStyles.container}>
				{this.renderCurrentState()}
			</View>
		);
	}
	signIn() {
		this.setState({loading: true});
		const { firebase } = this.props.screenProps;
		firebase.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				firebase.database()
					.ref(`users/${firebase.auth().currentUser.uid}`)
					.once('value').then(snapshot => {
						const user =  snapshot.val().userInfo;
						const { navigation } = this.props;
						navigation.navigate('UserProfile',
						{
							...user,
							firebase
						});
					});
			})
			.catch(error => {
				Alert.alert(`${error.message}: ${error.code}`);
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
		return (
			<View>
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
		)
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
