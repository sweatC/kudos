import { TabNavigator } from 'react-navigation';
import ExploreScreen from '../screens/explore-screen'
import UsersScreen from '../screens/users-screen'
import ProfileScreen from '../screens/profile-screen'


const ProfileTabNav = TabNavigator({
	Explore: {
		screen: ExploreScreen
	},
	Users: {
		screen: UsersScreen
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