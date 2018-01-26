import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class KudoInput extends Component {
    render() {
        return(
            <View style={kudoInputStyles.header}>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder="Your thankful message"
                    blurOnSubmit={false}
                    returnKeyType="done"
                    style={kudoInputStyles.input}
                    underlineColorAndroid='hsla(52, 75%, 6%, 0.91)'
                />
                <TouchableOpacity onPress={this.props.sendKudo}>
                    <Text style={kudoInputStyles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const kudoInputStyles = StyleSheet.create({
    header: {
        marginTop: '5%',
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    toggleIcon: {
        fontSize: 30,
        color: 'hsla(52, 75%, 6%, 0.91)'
    },
    input: {
        flex: 1,
        marginRight: 16,
        height: 50
    }
})