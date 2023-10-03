
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Chat from './Screens/Chat';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

function Camera(){
  
}
export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator >
      <Tab.Screen name='Home' component={Home} tabBarOptions={{
          activeTintColor: '#8DCF02', // Color of the active tab label
          inactiveTintColor: 'black', // Color of inactive tab labels
  
          tabBarStyle: {
            backgroundColor: 'Black', // Set the background color of the tab bar
          },
          style: {
            backgroundColor: 'black', // Set the background color of the tab bar
          },    
          
           // Background color of the tab bar
        }}
        options={{ tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={require('./assets/Home.png')} // Replace 'your-icon.png' with the actual icon file name in the root folder
            style={{ width: 10, height: 10, tintColor: color, }}
          />
        ),}}/>
      <Tab.Screen name='Camera' component={Camera}   options={{ tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={require('./assets/myCamera.png')} // Replace 'your-icon.png' with the actual icon file name in the root folder
            style={{ width: size, height: size, tintColor: color, }}
          />
        ),}} tabBarOptions={{
          activeTintColor: '#8DCF02', // Color of the active tab label
          inactiveTintColor: 'black', // Color of inactive tab labels
          style: { backgroundColor: 'black' },
          outerHeight:30
           // Background color of the tab bar
        }}/>   
      <Tab.Screen name='Chat' component={Chat}   options={{ tabBarIcon: ({ focused, color, size }) => (
          <Image
            source={require('./assets/Vector.png')} // Replace 'your-icon.png' with the actual icon file name in the root folder
            style={{ width: size, height: size, tintColor: color, }}
          />
        ),}} tabBarOptions={{
          activeTintColor: '#8DCF02', // Color of the active tab label
          inactiveTintColor: 'white', // Color of inactive tab labels
          outerHeight:30, style: { backgroundColor: 'black' },
          
           // Background color of the tab bar
        }
      }
        />     
     </Tab.Navigator>
    </NavigationContainer>
  );
}
