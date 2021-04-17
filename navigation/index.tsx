import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import TopTabNavigator from './TopTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import {Octicons, MaterialCommunityIcons} from '@expo/vector-icons'

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
    </Stack.Navigator>
  );
}
