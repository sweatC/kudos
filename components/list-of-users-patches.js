import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserPatch from './user-patch';


export default class ListOfUsersPatches extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={listOfUsersPatchesStyles.container}>
                <FlatList data={this.props.data} 
                renderItem={({ item }) => <UserPatch img={item.img}
                fullName={item.fullName} 
                count={item.count}  />} 
                />
            </View>
        );
    }
}

const listOfUsersPatchesStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '5%'
    }
});