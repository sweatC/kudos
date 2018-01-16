import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/welcome-screen';
import UserProfileScreen from '../screens/user-profile-screen';
import SignUpScreen from '../screens/sign-up-screen';
import SignInScreen from '../screens/sign-in-screen';
import SignOut from '../components/sign-out';


const RootNavigator = StackNavigator({
	Welcome: {
		screen: WelcomeScreen,
		navigationOptions: {
			title: 'Welcome'
		}
	},
	SignIn: {
		screen: SignInScreen,
		navigationOptions: {
			title: 'Sign in'
		}
	},
	SignUp: {
		screen: SignUpScreen,
		navigationOptions: {
			title: 'Sign up'
		}
	},
	UserProfile: {
		screen: UserProfileScreen,
		navigationOptions: ({ navigation }) => {
			const firstName = navigation.state.params.firstName;
			const firebase = navigation.state.params.firebase;
			return {
				title: `${firstName}'s Profile`,
				headerLeft: (<SignOut navigator={navigation} firebase={firebase} />)
			}
		}
	}
});

export default RootNavigator;