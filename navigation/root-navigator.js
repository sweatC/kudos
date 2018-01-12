import { StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/welcome-screen';
import UserProfileScreen from '../screens/user-profile-screen';
import SignUpScreen from '../screens/sign-up-screen';
import SignInScreen from '../screens/sign-in-screen';


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
		navigationOptions: ({navigation}) => ({
	      title: `${navigation.state.params.firstName}'s Profile`,
	    })
	}
});

export default RootNavigator;