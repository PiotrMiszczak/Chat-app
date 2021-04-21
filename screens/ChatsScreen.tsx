import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatRooms from '../data/ChatRooms'

import ListItem from '../components/ListItem/ListItem';
import { View } from '../components/Themed';

const room = {
  id: '1',
  users: [{
    id: 'u1',
    name: 'Vadim',
    imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
  }],
  lastMessage: {
    id: 'm1',
    content: 'Well done this sprint, guys!',
    createdAt: '2020-10-03T14:48:00.000Z',
  }
}

export default function ChatsScreen() {
  return (
    <View style={styles.container}>

    <FlatList data={ChatRooms} renderItem={({item})=><ListItem chatRoom={item}/>}/>
    
     
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding:0,
    justifyContent: 'flex-start',
  }
});
 