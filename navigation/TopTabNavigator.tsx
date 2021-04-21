import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Fontisto} from '@expo/vector-icons'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { TopTabParamList, ChatsParamList, TabTwoParamList, TabThreeParamList } from '../types';


//TODO - custom navigator

const TopTab = createMaterialTopTabNavigator<TopTabParamList>(

);

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
         style:{backgroundColor:Colors[colorScheme].tint},
         indicatorStyle:{backgroundColor:Colors[colorScheme].background,
         height:3
         },
         showIcon: true,
         
          }}>
      <TopTab.Screen
        name="Camera"
        component={TabTwoNavigator}
       
        options={{
          
          tabBarIcon: ({color})=> <Fontisto size={18} name="camera" color={color} />,
          tabBarLabel: ()=> null,
          
          
          
          
          
         
        }}
      />
      <TopTab.Screen
        name="Chats"
        component={ChatsNavigator}
        options={{
          
        }}
      />
      <TopTab.Screen
        name="Status"
        component={TabThreeNavigator}
        options={{
         
        }}
      />
       <TopTab.Screen
        name="Calls"
        component={TabThreeNavigator}
        options={{
          
        }}
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatsStack = createStackNavigator<ChatsParamList>();

function ChatsNavigator() {
  return (
    <ChatsStack.Navigator screenOptions={{headerShown:false}} >
      <ChatsStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </ChatsStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{headerShown:false}}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={ChatsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{headerShown:false}}>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Tab Three Title' }}
      />
    </TabThreeStack.Navigator>
  );
}


