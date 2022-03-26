import React from 'react'
import {View,Text,Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

import styles from '../style/styles';

function about(){

    const [item,setItem] = React.useState([
        {title:'Shopping', text:' Maha GreenHouse has it all to satisfy everyone’s shopping needs in a relaxed, secured and enjoyable environment.'},
        {title:'Leisure', text:' The variety of flowers makes you fall in love with your garden.'},
        {title:'Mission', text:'Our mission is to give our customer another taste of flowers'}
    ])
    return(
       
        <View style={styles.container}>
            
                <View style={styles.AboutContainer}>
                    
                    <FlatGrid
                    ListHeaderComponentStyle={styles.AboutContainer}
                    ListHeaderComponent={
                        <>
                            
                            <Text style={styles.titles}>Maha Story</Text>
                            <Text style={styles.AboutSubtitle1}>History</Text>
                            <Text style={styles.AboutText}>
                                Our Grandmother Jenitat Maha started selling Roses and Sunflowers at her father green House in Mahebourg, Mauritius in 1912. 
                                By age 21, the widowed mother of four sold Roses, Sunflowers and lys all over the countryside. Maha greenHouse is her legacy. 
                            </Text>
                            <Image source={require('../assets/old.png')} style={{width:350,height:300,position:'relative', top:25}}/>
                            <Text style={styles.AboutText}>
                                Like Bob Marley legacy, We did not want our Granny Legacy to be forgotten, that's we put some little design to the shop in order
                                to attract you, our lovely Customer but also to maintain the beauty it used ti have. Our Granny will be proud of us and May her soul rest in peace.
                            </Text>
                            <Image source={require('../assets/new.jpg')} style={{width:350,height:300,position:'relative',top:35}}/>
                            <Text style={styles.AboutSubtitle2}>What's make us unique</Text>
                        </>
                    }
                    itemDimension={100}
                    data={item}
                    spacing={30}
                    style={styles.AboutgridView}
                    renderItem={({item})=>(
                        <View style={styles.AboutitemContainer}>

                            <Text style={styles.titles}>{item.title}</Text>
                            
                            <Text style={styles.AboutText}>{item.text}</Text>
                        </View>
                    )}
                    
                    />
                    

                </View>
           
            
        </View>
        
        
    )
}

export default about;