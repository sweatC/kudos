import { TabNavigator } from 'react-navigation';
import ExploreScreen from '../screens/explore-screen';
import ProfileScreen from '../screens/profile-screen';
import UsersNavigator from './users-stack-navigator';


const ProfileTabNav = TabNavigator({
	Explore: {
		screen: ExploreScreen
	},
	Users: {
		screen: UsersNavigator
	},
	Profile: {
		screen: ProfileScreen
	}
},
	{
		tabBarPosition: 'bottom',
		animationEnabled: true
	});

export default ProfileTabNav;