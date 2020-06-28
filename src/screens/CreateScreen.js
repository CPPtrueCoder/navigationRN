import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {MainScreen} from "./MainScreen";

export const CreateScreen = ({}) => {
	return <View style={styles.center}>
		<Text>CreateScreen</Text>
	
	
	</View>
};
CreateScreen.navigationOptions={
	headerTitle:'Создать'
};

const styles = StyleSheet.create ({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
