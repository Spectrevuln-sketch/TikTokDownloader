import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements'

const ScreenTitle = () => {
    return (
        <View style={styles.secondaryContainer}>
            <Divider orientation="horizontal" width={5} color="#FFE300" style={styles.deviderHeader} />
            <Text style={styles.secondaryHeader}>SEMUA VIDEO GAMBAR</Text>
        </View>
    )
}

export default ScreenTitle

const styles = StyleSheet.create({
    secondaryContainer: {
        justifyContent: 'space-between',
    },
    secondaryHeader: {
        color: '#fff',
        paddingRight: '10%',
        fontSize: 15,
        fontWeight: '600'
    },
    deviderHeader: {
        position: 'absolute',
        width: 39,
        top: 0,
        bottom: '30%',
        left: 0,
        right: 0,
        zIndex: -100
    }

})

