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
                <FlatList data={this.props.patchesData}
                    renderItem={({ item }) => <UserPatch nav={this.props.navigator} usr={item}/*img={item.img}*/
                        fullName={`${item.firstName} ${item.lastName}`}
                        count={20} />}
                />
            </View>
        );
    }
}

const listOfUsersPatchesStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});