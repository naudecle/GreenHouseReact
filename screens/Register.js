import React, { Component } from "react";
import {TouchableOpacity, Text,View,Alert,TextInput, ScrollView} from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RadioButton from "../components/RadioButton"; //Script du RadioButton dans RadioButton.js
import styles from "../style/styles";

const SEXE = [
	{
		key: 'female',
		text: 'Female',
	},
	{
		key: 'male',
		text: 'Male',
	},
	
];
class RegForm extends Component{
    state = {
        nom:'',
        adress:'',
        age:'',
        sexe:'',
        password:'',
    }
    handleNom = (text)=>{
        this.setState({nom:text});
    };
    handleAdress = (text)=>{
        this.setState({adress:text});
    };
    handleAge = (text)=>{
        this.setState({age:text});
    };
    handleSexe = (text)=>{
        this.setState({sexe:text});
    };
    handlePassword = (text)=>{
        this.setState({password:text});
    }

    registration = ()=>{
        var valNom = this.state.nom;
        var valAdress = this.state.adress;
        var valAge = this.state.age;
        var valSexe = this.state.sexe;

        Alert.alert("Nom: " + valNom + "\n" + "Adresse: " + valAdress + "\n" + "Age: "+ valAge + "\n" + "Sexe: "+ valSexe );
    };


    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.registerContainer}>
                        <Text style={styles.titles}>SIGN UP</Text>
                        <Text style={styles.registerTexts}>NOM</Text>
                        <TextInput ref={input => {this.txtNom = input}} style={styles.txtInput} onChangeText={this.handleNom} placeholder="Enter your name"/>
                        <Text style={styles.registerTexts}>Email</Text>
                        <TextInput ref={input => {this.txtAdress = input}} style={styles.txtInput} onChangeText={this.handleAdress} placeholder="Enter your Email Adress"/>
                        <Text style={styles.registerTexts}>Password</Text>
                        <TextInput ref={input => {this.txtVille = input}} style={styles.txtInput} onChangeText={this.handlePassword} placeholder="Enter your Password"/>
                        <Text style={{marginRight:180,fontSize:17,borderBottomColor: '#A07154',color: '#763f3f',}}>Confirm Password</Text>
                        <TextInput ref={input => {this.txtVille = input}} style={styles.txtInput} onChangeText={this.handlePassword} placeholder="Confirm your Password"/>
                        <Text style={styles.registerTexts}>Age</Text>
                        <TextInput ref={input => {this.txtAge = input}} style={styles.txtInput} onChangeText={this.handleAge} placeholder="Enter your age"/>
                        <Text style={styles.texts}>Sexe</Text>
                        <RadioButton PROP={SEXE} ref={input => {this.txtSexe = input}} onChangeText={this.handleSexe}/>

                        
                        <TouchableOpacity style={styles.buttons} onPress={()=>this.registration()}>
                        <Text style={styles.textsButton}>Sign Up</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </View>
            
            
        );
    };
    
};


 



export default RegForm;