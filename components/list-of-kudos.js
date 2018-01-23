import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import Kudo from './kudo';


export default class ListOfKudos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false
		}
		this.onRefresh = this.onRefresh.bind(this);
		this.endRefresh = this.endRefresh.bind(this);
	}

	render() {
		return (
			<View style={listOfKudosStyles.container}>
				<FlatList data={this.props.kudosData}
					renderItem={({ item }) => <Kudo txt={item.text} img={item.img} />} 
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.onRefresh}
						/>
					}/>
			</View>
		);
	}
	onRefresh() {
		this.setState({ refreshing: true });
		this.props.fetchKudos(this.endRefresh);
	}
	endRefresh() {
		this.setState({ refreshing: false });
	}
}

const listOfKudosStyles = StyleSheet.create({
	container: {
		flex: 1
	}
});