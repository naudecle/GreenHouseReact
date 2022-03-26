import { ThemeProvider } from '@react-navigation/native';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(160,113,84,0.4)',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      
    },
    otherContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    titles: {
      fontSize:24,
      borderBottomWidth: 2,
      borderBottomColor: '#A07154',
      color: '#763f3f',
      justifyContent:'center',
    },
    texts:{
      fontSize:22,
      borderBottomColor: '#A07154',
      color: '#763f3f',
    },
    subtext:{
      fontSize:15,
      top:0,
      borderBottomColor: '#A07154',
      color: '#763f3f',
    },
    pricetext:{
      fontSize:15,
      fontWeight:'100',
      top:0,
      borderBottomColor: '#A07154',
      color: '#A07154',
    },
    textsButton:{
      fontSize:20,
      borderBottomColor: '#A07154',
      color: '#763f3f',
      textAlign:'center',
    },
  
    buttons: {
      borderRadius:15, 
      backgroundColor:'#A07154', 
      height:32,
      width:250,
     
      
    },
  
    images: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-evenly'
    },
    header:{
      alignSelf:'center',
      paddingBottom:40, 
      color:'#A07154', 
      fontSize:40, 
      fontWeight:'bold', 
  },
  txtInput:{
      borderBottomWidth:2, 
      borderBottomColor:'#A07154',
      borderColor:'#763f3f',
      color:'#A07154',
      fontSize: 16,
      margin:10,
      height:40,
      width:300, 
      backgroundColor:'#fff', 
      paddingLeft:10

  },

  registerContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    top:10,
    
    
  },
  registerTexts:{
    marginRight:250,
    fontSize:17,
    borderBottomColor: '#A07154',
    color: '#763f3f',
  },
  gridView: {
    
    flex: 1,
    backgroundColor: 'rgba(160,113,84,0.4)',
    
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    height: 250,
  },
  gridButton:{
    borderRadius:15, 
    backgroundColor:'#A07154', 
    height:30,
    width:100,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 0,
    
  },
  AboutText:{
    fontSize:15,
    top:25,
    borderBottomColor: '#A07154',
    color: '#763f3f',
    textAlign:'left',
    textAlignVertical:'center',
  },
  AboutContainer:{
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  AboutSubtitle1:{
    alignSelf:'center',
    borderRadius:5,
    width:200,
    fontSize:24,
    top:10,
    color: '#763f3f',
    textAlign:'center',
    backgroundColor:'#A07154',
    
  },
  AboutSubtitle2:{
    alignSelf:'center',
    borderRadius:5,
    fontSize:24,
    width:300,
    top:50,
    color: '#763f3f',
    textAlign:'center',
    backgroundColor:'#A07154',
    
  },
  AboutgridView: {
    flex: 1,
  },
  AboutitemContainer: {
    justifyContent: 'flex-start',
    top:50,
    borderRadius: 5,
    padding: 10,
    height: 250,
  },
  ContactText:{
    fontSize:15,
    fontWeight:"bold",
    top:20,
    borderBottomColor: '#A07154',
    color: '#763f3f',
    textAlign:'center',
  },
  ContactHeaderContainer:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    bottom:5,
  },
  ContactBottomContainer:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:1050,
  },

  MessageInput:{
    borderBottomWidth:2, 
    
      borderBottomColor:'#A07154',
      margin:10,
      height:300,
      width:300, 
      backgroundColor:'#fff', 
      paddingLeft:10
  },

  forgotPassword:{
    fontSize:12,
    fontWeight:'bold',
    textDecorationLine:'underline',
    color:'#A07154',
  },

  hasErrors:{
    color: '#720100',
    fontSize:14,
    fontWeight:'bold',
    
  }

  
  });

  export default styles;