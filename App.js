
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Chat from './Screens/Chat';

const Tab = createBottomTabNavigator();

function Camera(){
  
}
export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} tabBarOptions={{
          activeTintColor: 'green', // Color of the active tab label
          inactiveTintColor: 'black', // Color of inactive tab labels
          style: { backgroundColor: 'black' },
          outerHeight:20
           // Background color of the tab bar
        }}
        options={{headerShown:false,}}/>
      <Tab.Screen name='Camera' component={Camera} options={{headerShown:false}}/>   
      <Tab.Screen name='Chat' component={Chat} options={{headerShown:false}}/>     
     </Tab.Navigator>
    </NavigationContainer>
  );
}
