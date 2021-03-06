import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions
} from 'react-native';
import ListOfKudos from '../components/list-of-kudos';


export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userKudos: []
		};
		this.getFullName = this.getFullName.bind(this);
		this.fetchKudos = this.fetchKudos.bind(this);
	}
	componentWillMount() {
		this.fetchKudos();
	}
	render() {
		return (
			<View style={profileScreenStyles.container}>
				<View style={profileScreenStyles.header}>
					<View style={profileScreenStyles.img_wrapper}>
						<Image style={profileScreenStyles.img} 
						source={{ uri: 'https://pbs.twimg.com/profile_images/831993825635745796/HnVmB0-k.jpg' }} />
					</View>
					<View style={profileScreenStyles.txt_wrapper}>
						<Text style={profileScreenStyles.header_txt}>{this.getFullName()}</Text>
					</View>
				</View>
				<View style={profileScreenStyles.recieved_kudos}>
					<Text style={profileScreenStyles.recieved_kudos_txt}>Recieved Kudos</Text>
					<ListOfKudos kudosData={this.state.userKudos} fetchKudos={this.fetchKudos} />
				</View>
			</View>
		);
	}

	getFullName() {
		const fName = this.props.screenProps.state.firstName;
		const lName = this.props.screenProps.state.lastName;
		return `${fName} ${lName}`;
	}
	fetchKudos(callback=()=>'') {
		const { firebase } = this.props.screenProps.state;
		const key = firebase.auth().currentUser.uid;
		firebase.database().ref(`users/${key}/userKudos`).on('value', snap => {
			const userKudos = [];
			snap.forEach(kudo => {
				userKudos.push({
					key: kudo.val().key,
					img: {
						uri: kudo.val().img
					},
					text: kudo.val().text
				})
			})
			this.setState({ userKudos });
			callback();
		})
	}
}

const profileScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	header: {
		marginTop: '10%',
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	img_wrapper: {
		borderRadius: 5,
		backgroundColor: 'lightgrey'
	},
	txt_wrapper: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 200,
		height: 100,
		borderBottomRightRadius: 5,
		borderTopRightRadius: 5,
		backgroundColor: 'lightgrey'
	},
	header_txt: {
		fontSize: 19,
		fontFamily: 'Roboto'
	},
	recieved_kudos: {
		flex: 12,
		marginTop: '7%'
	},
	recieved_kudos_txt: {
		fontSize: 28,
		fontFamily: 'Roboto',
		textAlign: 'center',
		fontWeight: '100'
	},
	img: {
		width: 100,
		height: 100,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5
	}
});

