import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image
} from 'react-native';


export default class UserPatch extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		    <View style={userPatchStyles.container}>
		    	<Image style={userPatchStyles.img} source={{uri:'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg'}} />
		    	<View style={userPatchStyles.text_wrapper}>
		    		<Text style={userPatchStyles.name_txt}></Text>
		    		<Text style={userPatchStyles.kudos_count_txt}></Text>
		    	</View>
		    	<View style={userPatchStyles.arrow}></View>
		    </View>
			);
	}
}

const userPatchStyles = StyleSheet.create({
	container: {

	}, 
	img: {},
	text_wrapper: {},
	name_txt: {},
	kudos_count_txt: {},
	arrow: {}
})