import React from 'react'

import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
	
	const openPostHandler = post => {
		navigation.navigate ('Post', {
			postId: post.id, date: post.date,booked:post.booked
		});
	};
	
	return (
		<PostList data={DATA} onOpen={openPostHandler}/>)
};

MainScreen.navigationOptions = {
	headerTitle: 'I HATE IT',
	//Need update for future versions from object to callback function with return JSX
	headerRight: (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
		<Item title='Take photo'
		      iconName='ios-camera'
		      onPress={() => console.log ('Press')}/>
	</HeaderButtons>),
	headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
		<Item title='Toogle Drawer'
		      iconName='ios-menu'
		      onPress={() => console.log ('Press')}/>
	</HeaderButtons>
};

