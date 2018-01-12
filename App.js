import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/root-navigator';
import ListOfUsersPatches from './components/list-of-users-patches';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
		this.setSource = this.setSource.bind(this);
	}
  	render() {
		const data = [{key: 1, txt: "Tnak You"}, {key: 2, txt: "Thanks"}, {key:3, txt: "glhf next"}];
			const uData = [
				{ 
					key: 1, 
					img: { uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' },
					fullName: "Rexar Agro", 
					count: 23	
				},
				{
					key: 2,
					img: { uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' },
					fullName: "Valeera Wise",
					count: 74
				},
				{
					key: 3,
					img: { uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' },
					fullName: "Guldan Windless",
					count: 11
				}
			]
    	return(
			<ListOfUsersPatches data={uData}/>
      		//<RootNavigator screenProps={{state: this.state, setUser: this.setSource}}/>
      	);
  	}
	setSource(user) {
		this.setState({user});
		AsyncStorage.setItem("user", JSON.stringify(user));
	}
}
