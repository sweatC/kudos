import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { ImagePicker } from 'expo';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ActivityIndicator
} from 'react-native';


export default class SendKudoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            loading: false
        }
        this.pickImage = this.pickImage.bind(this);
        this.renderCurrentState = this.renderCurrentState.bind(this);
    }
    render() {
        return (
            <View style={sendKudoScreenStyles.container}>
                {this.renderCurrentState()}
            </View>
        );
    }

    renderCurrentState() {
        if(this.state.loading) {
            return(
                <View>
                    <ActivityIndicator size='large' color="#0000ff" />
                </View>
            )
        }
        return(
            <View>
                <View style={sendKudoScreenStyles.header}>
                    <Image style={sendKudoScreenStyles.img} />
                    <Text>{this.props.name}</Text>
                </View>
                <View style={sendKudoScreenStyles.main}>
                    <Image style={sendKudoScreenStyles.img_preview}
                        source={{ uri: this.state.image }} />
                    <View style={sendKudoScreenStyles.take_photo_btn}>
                        <Text style={sendKudoScreenStyles.take_photo_btn_txt}
                            onPress={() => this.pickImage()}>
                            Take a Photo</Text>
                    </View>
                    <TextInput multiline={true} numberOfLines={10}
                        placeholder="Your thankful message" />
                    <View style={sendKudoScreenStyles.send_btn}>
                        <Icon name='sc-telegram' type='evilicon'
                            color='#517fa4' size={48} />
                    </View>
                </View>
            </View>
        )
    }

    async pickImage() {
        this.setState({loading: true});
        const picked = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4,3]
        });

        if (!picked.cancelled) {
            this.setState({ image: picked.uri, loading: false });
        }
    }
}

const sendKudoScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
        width: Dimensions.get('window').width - 20,
        height: 175
    },
    take_photo_btn: {
        height: 45,
        width: Dimensions.get('window').width - 20,
        backgroundColor: 'hsla(52, 75%, 6%, 0.91)',
        borderRadius: 5,
        marginTop: '5%'
    },
    take_photo_btn_txt: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 12
    },
    send_btn: {
        alignItems: 'flex-end',
        marginTop: '5%'
    }
});

