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
		animationEnabled: true,
		tabBarOptions: {
			style: {
				backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
			},
			indicatorStyle: {
				backgroundColor: 'white',
			}
		}
	});

export default ProfileTabNav;