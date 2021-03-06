import React,{useEffect} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native'
import {MainScreen} from "./MainScreen";
import {ScrollView} from "react-native";
import {THEME} from "../theme";
import {DATA} from "../data";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
export const PostScreen = ({navigation}) => {
	
	const postId = navigation.getParam ('postId');
	const post = DATA.find (post => post.id === postId);
	// useEffect(()=>{
	// 	navigation.setParams({booked:post.booked})
	// },[]);
	const removeHandler = () => {
		Alert.alert (
			'Удаление',
			'Вы уверены?',
			[
				
				{
					text: 'Отменить',
					style: 'cancel'
				},
				{
					text: 'Удалить',
					style: 'destructive',
					onPress: () => {}
				}
			],
			{cancelable: false}
		);
	};
	return <ScrollView>
		<Image
			style={styles.image}
			source={{uri: post.img}}/>
		<View style={styles.textWrap}>
			<Text style={styles.title}>
				{post.text}
			</Text>
			<Button title="Удалить"
			        color={THEME.MAIN_COLOR}
			        onPress={removeHandler}/>
		</View>
	
	
	</ScrollView>
};
PostScreen.navigationOptions = ({navigation}) => {
	const date = navigation.getParam ('date');
	const booked = navigation.getParam('booked');
	
	const iconName =booked?  'ios-star' : 'ios-star-outline';
	return {
		headerTitle: `Пост от ${new Date (date).toLocaleDateString ()}`,
		headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item title='Take photo'
			      iconName={iconName}
			      onPress={() => console.log ('Press')}/>
		</HeaderButtons>
	}
};

const styles = StyleSheet.create ({
	image:{
		width:'100%',
		height:200
	},
	textWrap:{
		padding:10
	},
	title:{
	fontFamily:'open-regular'
	}
	
});
