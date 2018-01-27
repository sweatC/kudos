import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import UserPatch from './user-patch';


export default class ListOfUsersPatches extends Component {
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
            <View style={listOfUsersPatchesStyles.container}>
                <FlatList data={this.props.patchesData}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    } renderItem={({ item }) => <UserPatch firebase={this.props.firebase}
                                        nav={this.props.navigator} usr={item}
                                        fullName={`${item.firstName} ${item.lastName}`}
                                        count={item.count} />}
                />
            </View>
        );
    }
    onRefresh() {
        this.setState({ refreshing: true });
        this.props.fetchUsers(this.endRefresh);
    }
    endRefresh() {
        this.setState({ refreshing: false });
    }
}

const listOfUsersPatchesStyles = StyleSheet.create({
    container: {
        flex: 1
    }
});