import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import {useRoute} from '@react-navigation/native'


export default function ChatsRoomScreen() {

  const route = useRoute();
  console.log(route.params)

  return (
    <View style={styles.container}>

     <Text>Hello chat</Text>
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
 