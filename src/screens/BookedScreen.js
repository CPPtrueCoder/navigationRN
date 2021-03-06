import React from 'react'
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const BookedScreen = ({navigation}) => {
	
	const openPostHandler = post => {
		navigation.navigate ('Post', {
			postId: post.id, date: post.date, booked: post.booked
		});
	};
	
	return (
		<PostList data={DATA.filter (post => post.booked)}
		          onOpen={openPostHandler}/>)
};

BookedScreen.navigationOptions = {
	headerTitle: 'Liked',
	
	headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
		<Item title='Toogle Drawer'
		      iconName='ios-menu'
		      onPress={() => console.log ('Press')}/>
	</HeaderButtons>
};

