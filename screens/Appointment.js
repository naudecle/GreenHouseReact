import React from "react";
import {View,Text,TouchableOpacity, TextInput, Alert, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from "../style/styles";
const Appointment = ()=>{
     const [date, setDate] = React.useState(new Date(1598051730000));
     const [mode, setMode] = React.useState('date');
     const [show, setShow] = React.useState(false);
     
     const onChange= (event, selectedDate) =>{
         const currentDate = selectedDate || date;
         setShow(Platform.OS === 'android');
         setDate(currentDate)
     };
     const showMode = (currentMode)=>{
         setShow(true);
         setMode(currentMode);
     };
     const showDatepicker = ()=>{
         showMode('date');
     }
     return(
        <View style={styles.container}>
            <Text style={styles.titles}>Book An Appointment</Text>
            <Text style={styles.registerTexts}>Name</Text>
            <TextInput style={styles.txtInput} placeholder="Enter your name"/>
            <Text style={styles.registerTexts}>Adress</Text>
            <TextInput style={styles.txtInput} placeholder="Enter Your Adress"/>
            <Text style={styles.registerTexts}>Pick a day</Text>
            <DateTimePicker
                style={styles.datePickerStyle}
                value={date}
                mode={mode}
                display="calendar"
                placeholder="Select a date"
                dateFormat = 'day month year'
                dateIcon = 'calendar'
                minDate={new Date(2021, 12, 9)}
                maxDate={new Date(2021, 12, 24)}
                neutralButtonLabel = "clear"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                disabled = {false}
                customStyles={{
                    dateIcon:{
                        position: 'absolute', 
                        left:0, 
                        top:4, 
                        marginLeft:0
                    },
                    dateInput:{
                        marginLeft:36,
                        borderWidth:2,
                        borderColor:'#A07154'
                    }
                
                }}
                onChange={onChange}
            />
            <TouchableOpacity style={styles.buttons} onPress={()=>Alert.alert("Booked")}>
                <Text style={styles.textsButton}>Book</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Appointment;
