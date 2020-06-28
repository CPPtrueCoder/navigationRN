import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MainScreen} from "./MainScreen";

export const BookedScreen = ({}) => {
	return <View style={styles.center}>
		<Text>BookedScreen</Text>
	
	
	</View>
};
BookedScreen.navigationOptions={
	headerTitle:'Вам понравилось'
};

const styles = StyleSheet.create ({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
