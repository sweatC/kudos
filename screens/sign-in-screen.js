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
			<View style={this.state.loading ? signInScreenStyles.loader :signInScreenStyles.container}>
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
						this.setState({ loading: false });
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
				this.setState({loading: false});
				Alert.alert(`Error: ${error.code.split('/')[1]}`);
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
		return (
			<View>
				<View style={signInScreenStyles.inputs}>
					<FormLabel labelStyle={[signInScreenStyles.color, signInScreenStyles.font]}>Email</FormLabel>
					<FormInput onChangeText={email => this.setState({ email })}
						underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signInScreenStyles.color, signInScreenStyles.font, signInScreenStyles.input]} />
					<FormLabel labelStyle={[signInScreenStyles.color, signInScreenStyles.font]}>Password</FormLabel>
					<FormInput secureTextEntry={true}
						underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
						inputStyle={[signInScreenStyles.color, signInScreenStyles.font, signInScreenStyles.input]}
						onChangeText={password => this.setState({ password })} />
				</View>
				<View style={signInScreenStyles.sign}>
					<Button
						buttonStyle={signInScreenStyles.btn}
						large
						fontFamily='Roboto'
						iconRight={{ name: 'face', color: '#fff' }}
						title='Sign in'
						onPress={() => this.signIn()} />
				</View>
			</View>
		)
	}
}

const signInScreenStyles = StyleSheet.create({
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
		paddingTop: '15%'
	},
	input: {
		padding: '2%'
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
	color: {
		color: 'hsla(52, 75%, 6%, 0.91)'
	},
	font: {
		fontFamily:'Roboto'
	}
});
