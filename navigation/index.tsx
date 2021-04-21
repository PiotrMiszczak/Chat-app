import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import TopTabNavigator from './TopTabNavigator';
import ChatRoom from '../screens/ChatRoomScreen'
import LinkingConfiguration from './LinkingConfiguration';
import {Octicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons} from '@expo/vector-icons'
import { Text } from '../components/Themed';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.light.tint,
        shadowOpacity:0,
        elevation:0
      },
      headerTintColor: Colors.light.background
     }}>
      <Stack.Screen name="Root" component={TopTabNavigator} options={
        {title: 'ChattyChat',
      headerRight: ()=>
    <View style={{flexDirection:'row',
    width:60,
    justifyContent:'space-between',
    marginRight:10}}>
      <Octicons name="search" size={24} color={'white'} />
      <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} />
    </View>}
      } />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} options={({ route }) => ({ title: route.params.name,
      headerRight:()=>(
        <View style={{flexDirection:'row',
        width:120,
   
    justifyContent:'space-between',
    marginRight:10}}>
      <MaterialIcons name="call" size={24} color={'white'} />
      <FontAwesome5 name="video" size={24} color={'white'} />
      <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} />
    </View>
      )
      })}  />
    </Stack.Navigator>
  );
}
