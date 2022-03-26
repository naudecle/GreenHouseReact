import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MyUserStack from './user1'
import MyScreen from './Home';
import Cart from './Cart';

const Tab = createBottomTabNavigator();


function TabScreen(){

    return(
      
        <Tab.Navigator screenOptions={{headerStyle:{backgroundColor: '#A07154'}, headerTintColor:'#763f3f', headerShown:true, headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}} >
            
            <Tab.Screen name="Maha GreenHouse" component={MyScreen} options={{
        tabBarIcon: (props) => (
          <Ionicons name="home" size={props.size} color={props.color} />
        ),
        tabBarActiveBackgroundColor:'#A07154',tabBarInactiveBackgroundColor:'#763f3f' 
      }}/>
            <Tab.Screen name="Profile" component={MyUserStack} options={{
        tabBarIcon: (props) => (
          <Ionicons name="person" size={props.size} color={props.color} />
        ),tabBarActiveBackgroundColor:'#A07154', tabBarInactiveBackgroundColor:'#763f3f', tabBarStyle: {display:"none"}
        }}
        
        />
        

        <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: (props) => (
          <Ionicons name="cart" size={props.size} color={props.color} />
          
        ),tabBarActiveBackgroundColor:'#A07154', tabBarInactiveBackgroundColor:'#763f3f'
        }}/>

        
        </Tab.Navigator>
      
        
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(160,113,84,0.6)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
    
  },

  texts: {
    fontSize:18,
    borderBottomWidth: 2,
    borderBottomColor: '#A07154',
    color: '#763f3f',
    
  },

  buttons: {
    borderRadius:15, 
    borderBottomWidth:0, 
    backgroundColor:'#A07154',
    textAlign:'center',

   
  },

  images: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly'
  },
});


export default TabScreen;