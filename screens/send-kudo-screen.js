import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';


export default class SendKudoScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={sendKudoScreenStyles.container}>
                <View style={sendKudoScreenStyles.header}>
                    <Image style={sendKudoScreenStyles.img} />
                    <Text>{this.props.name}</Text>
                </View>
                <View style={sendKudoScreenStyles.main}>
                    <Image style={sendKudoScreenStyles.img_preview}/>
                    <View style={sendKudoScreenStyles.take_photo_btn}>
                        <Text style={sendKudoScreenStyles.take_photo_btn_txt}>Take a Photo</Text>
                    </View>
                    <TextInput multiline={true} numberOfLines={10}
                     placeholder="Your thankful message" />
                    <View style={sendKudoScreenStyles.send_btn}>
                        <Icon name='sc-telegram' type='evilicon'
                            color='#517fa4' size={48} />
                    </View>
                </View>
            </View>
        );
    }
}

const sendKudoScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '20%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: '5%',
        backgroundColor: 'lightgrey',
        marginBottom: '5%'
    },
    img: {
        width: 70,
        height: 70
    },
    img_preview: {
        width: 250,
        height: 150
    },
    take_photo_btn: {
        height: 45,
        width: 250,
        backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
        borderRadius: 5,
    },
    take_photo_btn_txt: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 12
    },
    send_btn: {
        alignItems: 'flex-end',
        marginTop: '10%'
    }
});

