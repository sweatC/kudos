import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Kudo from './kudo';


export default class ListOfKudos extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={listOfKudosStyles.container}>
				<FlatList data={this.props.data} renderItem={({item}) => <Kudo txt={item.txt}/>}/>
			</View>
			);
	}
}

const listOfKudosStyles = StyleSheet.create({
	container: {
	   flex: 1,
	   paddingTop: '5%'
	}
});