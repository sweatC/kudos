import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { NavigationActions } from 'react-navigation';
import KudoInput from '../components/send-kudo-input';
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
            loading: false,
            text: ''
        }
        this.pickImage = this.pickImage.bind(this);
        this.renderCurrentState = this.renderCurrentState.bind(this);
        this.sendKudo = this.sendKudo.bind(this);
        this.getFullName = this.getFullName.bind(this);
        this.changeTextHandler = this.changeTextHandler.bind(this);
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
                    <Text>{this.getFullName()}</Text>
                </View>
                <View style={sendKudoScreenStyles.main}>
                    <Image style={sendKudoScreenStyles.img_preview}
                        source={{ uri: this.state.image }} />
                    <View style={sendKudoScreenStyles.take_photo_btn}>
                        <Text style={sendKudoScreenStyles.take_photo_btn_txt}
                            onPress={() => this.pickImage()}>
                            Take a Photo</Text>
                    </View>
                    <KudoInput sendKudo={this.sendKudo} onChangeText={this.changeTextHandler} />
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
        switch(picked.cancelled) {
            case true:
                this.setState({ loading: false });
                break;
            case false:
                this.setState({ image: picked.uri, loading: false });
                break;
        }
    }

    sendKudo() {
        const { key, firebase } = this.props.navigation.state.params;
        const newKudoRef = firebase.database().ref(`users/${key}/userKudos`).push();
        firebase.database().ref(`users/${key}/userKudos`).push({
            key: newKudoRef.key,
            text: this.state.text,
            img: this.state.image
        })
        firebase.database().ref(`kudos`).push({
            key: newKudoRef.key,
            text: this.state.text,
            img: this.state.image
        })
        const navigateAction = NavigationActions.navigate({
            routeName: 'Users'
        })
        this.props.navigation.dispatch(navigateAction);
    }

    changeTextHandler(text) {
        this.setState({ text })
    }

    getFullName() {
        const { firstName, lastName } = this.props.navigation.state.params;
        return `${firstName} ${lastName}`;
    }
}

const sendKudoScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    }
});

