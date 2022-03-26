import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, TouchableOpacity, Text, Image, SafeAreaView, ImageBackground} from 'react-native';

import styles from './style/styles';
//import LogForm from './screens/Login';
import RegForm from './screens/Register';
import MyStack from './screens/Log1';



const Userstack = createNativeStackNavigator();

const userScreen =()=>{
    return(
      <NavigationContainer independent={true}>
        <Userstack.Navigator>
          <Userstack.Screen
              name = 'Maha GreenHouse'
              component={ScreenUser}
              
              options = {{title : "Maha GreenHouse", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:32,fontWeight:"bold"}, headerShown:true}}
          
          />
          <Userstack.Screen name='LogIn' 
          component={MyStack}
          options = {{title : "Sign In", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}, headerShown:false}}
          />
          <Userstack.Screen name='SignUp'  
          component={RegForm}
          options = {{title : "Sign Up", headerStyle:{backgroundColor:'#A07154'}, headerTintColor:'#763f3f', headerTitleAlign:'center', headerTitleStyle:{fontSize:35,fontWeight:"bold"}}}
          />
        
        
        </Userstack.Navigator>
      </NavigationContainer>
        
    )
    
}

const ScreenUser =({navigation})=>{
    return(
      <SafeAreaView style={styles.container}>
        
        <View style={styles.otherContainer}>
        <Image source={require("./assets/wall.jpg")} style={{width:145, height:145, top:0, borderRadius:100}}/>
        <Text style={styles.textsButton}>Welcome to our Store</Text>
          <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('LogIn',{ name:'LogIn'})}>
              <Text style={styles.textsButton}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('SignUp',{ name:'SignUp'})}>
              <Text style={styles.textsButton}>Sign Up</Text>
          </TouchableOpacity>

          
        </View>
      </SafeAreaView>
        
    )
}

export default userScreen;