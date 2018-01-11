import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/root-navigator';
import ListOfKudos from './components/list-of-kudos';


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
    	return(
    		<ListOfKudos data={data}/>
      		//<RootNavigator screenProps={{state: this.state, setUser: this.setSource}}/>
      	);
  	}
	setSource(user) {
		this.setState({user});
		AsyncStorage.setItem("user", JSON.stringify(user));
	}
}
