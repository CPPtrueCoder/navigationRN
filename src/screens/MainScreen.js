import React from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'
import {Button} from "react-native";
import {DATA} from "../data";

export const MainScreen = ({navigation}) => {

	
	return (
	<View style={styles.wrapper}>
	
	<FlatList data={DATA} keyExtractor={post=>post.id.toString()}
	renderItem = {({item})=>{
		return <View>
			<Text>{item.text}</Text>
		</View>
	}}/>
	</View>)
};

MainScreen.navigationOptions={
headerTitle:'I HATE IT'
};

const styles = StyleSheet.create ({
	center: {
		padding:10
	}
});
