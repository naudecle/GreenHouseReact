import React from 'react';
import { Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Map from '../components/Map';
import {FlatGrid} from 'react-native-super-grid';
import { Ionicons } from '@expo/vector-icons';

import styles from '../style/styles';
import { TextInput } from 'react-native-gesture-handler';

const Contact = ()=>{
    const [item,setItem] = React.useState([
        {name:"call",iconColor:'#d69970', height: 100, text:'+230 57112344',code:'#392010'},
        {name:"mail",iconColor:'#392010',height: 100, text:' Abc@gmail.com', code:'#b16632'},
        {name:"location",iconColor:'#b166232',height:100, text:'Dr Maurice Cure St Rose Hill, Mauritius', code:'#d69970'}
    ])
    return(
        
           
               <FlatGrid
               
                ListHeaderComponent={
                    <>
                    <View style={styles.ContactHeaderContainer}><Text style={styles.titles}>Our Location</Text></View>
                    
                    <Map/>
                    </>
                }
                ListFooterComponent={
                    <>
                        <View style={styles.ContactBottomContainer}>
                        <Text style={styles.titles}>Get in Touch</Text>
                            <Text style={styles.registerTexts}>Name</Text>
                            <TextInput style={styles.txtInput} placeholder="Enter your name"/>
                            <Text style={styles.registerTexts}>Your Mail</Text>
                            <TextInput style={styles.txtInput} placeholder="Enter Your Email"/>
                            <Text style={styles.registerTexts}>Subject</Text>
                            <TextInput style={styles.txtInput} placeholder="Subject"/>
                            <Text style={styles.registerTexts}>Message</Text>
                            <TextInput style={styles.MessageInput} placeholder="Type your Message"/>
                            <TouchableOpacity style={styles.buttons} onPress={()=>Alert.alert("Submit")}>
                                <Text style={styles.textsButton}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                    </>
                }
                
                itemDimension={100}
                data={item}
                spacing={30}
                style={styles.gridView}
                renderItem={({item})=>(
                    <View style={styles.AboutitemContainer,{backgroundColor:item.code,height:item.height, borderRadius:10, top:10, width:156}}>
                        
                        <Ionicons name={item.name} size={25} color='#fff' />
                        <Text style={styles.ContactText}>{item.text}</Text>
                    </View>
                )}
            />
           
            
        
    )
}



export default Contact;