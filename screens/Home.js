import React from 'react';
import { Text, View, ImageBackground, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from '../style/styles';

import MahaScreen from './Maha';
import Appointment from './Appointment';
import about from './About';
import Contact from './Contact';


const Stack = createNativeStackNavigator();

const MyScreen = ()=>{
  return(
    
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          backgroundColor= 'rgba(160,113,84,0.6)'
          options = {{title : "Maha GreenHouse", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:true}}
        />
        <Stack.Screen 
        name="Maha" 
        component = {MahaScreen}
        options = {{title : "Maha store", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
        />
        <Stack.Screen 
        name="Appointment" 
        component = {Appointment}
        options = {{title : "Book Your Appointment", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:28,fontWeight:"bold"}}}
        />
        <Stack.Screen 
        name="About" 
        component = {about}
        options = {{title : "Our Story and Purpose", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:28,fontWeight:"bold"}}}
        />
        <Stack.Screen 
        name="Contact" 
        component = {Contact}
        options = {{title : "Talk to Us", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
        />
      </Stack.Navigator>
      
   
  );
};
const HomeScreen = ({navigation}) =>{
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/wall.jpg')} resizeMode='cover' style={{width: 450, height: 750, flex:1.2}} >
      
      <View style ={styles.container}>
      
        <Text style={styles.titles}>Maha Green House</Text>
        

        <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Maha', { name : 'maha'})}>

        <Text style={styles.textsButton}>Our Green Store</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Appointment',{name:'Appointment'})}>

          <Text style={styles.textsButton}>Book An Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('About',{name:'About'})}>

          <Text style={styles.textsButton}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Contact',{name:'Contact'})}>

          <Text style={styles.textsButton}>Get in Touch</Text>
        </TouchableOpacity>
      
      
      </View>
      
      </ImageBackground>
    </SafeAreaView>
   
  )
}




export default MyScreen;