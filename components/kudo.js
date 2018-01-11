import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image,
	Dimensions
} from 'react-native';

export default class Kudo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={kudoStyles.container}>
				<Image style={kudoStyles.img} source={{uri: 'https://cdn-media-1.lifehack.org/wp-content/files/2013/11/60-Things-To-Be-Thankful-For-In-Life.jpg'}}/>
				<Text style={kudoStyles.txt}>{this.props.txt}</Text>
			</View>
			);
	}
}

const kudoStyles = StyleSheet.create({
	container: {
	    flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'flex-start',
	    alignItems: 'center',
	    backgroundColor: 'lightgrey',
	    padding: '2%'
	},
	img: {
    	width:Dimensions.get('window').width-20,
    	height:200
	},
	txt: {
    	fontSize: 16,
		fontFamily: 'Roboto'
	}
});