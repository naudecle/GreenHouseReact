import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet } from 'react-native';

//const height = Dimensions.get('screen').height

const Map = () =>{
    return(
        <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
            latitude: -20.219967425050555,
            longitude: 57.524978722385505,
            latitudeDelta:0.015,
            longitudeDelta:0.0121
        }}
        >
            <MapView.Marker
                coordinate={{
                    latitude: -20.219967425050555,
                    longitude: 57.524978722385505,
                }}
                title={"Maha Green House"}
                description={"Floriste"}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height:200,
        width:350,
        alignSelf:'center',
        
    }
})

export default Map;