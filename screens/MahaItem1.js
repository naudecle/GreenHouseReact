import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlatGrid} from 'react-native-super-grid'


class MahaStore extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texts}> Maha Green House</Text>
                <Image
                    source = {require('../assets/fleur1.jpg')}
                    style={{width:112, height:120}}

                />
                <Text style={styles.texts}>Gerbra Bouquet</Text>
                <Text>Price: 850</Text>
                <TouchableOpacity style={styles.buttons} onPress={()=> Alert.alert("Add to the cart")}>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(160,113,84,0.6)',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      
    },
    texts: {
        fontSize:20,
        borderBottomWidth: 2,
        borderBottomColor: '#A07154',
        color: '#763f3f',
    },
    row:{
        flex: 1,
      backgroundColor: 'rgba(160,113,84,0.6)',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection:'row',
      flexWrap:'wrap',
    },
    buttons: {
        borderRadius:15, 
        borderBottomWidth:0, 
        backgroundColor:'#A07154',
        textAlign:'center',
    
       
      },

});

export default MahaStore;