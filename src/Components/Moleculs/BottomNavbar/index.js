import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


const BottomNavbar = () => {
    return (

        <>
            <View style={{ flex: 1, backgroundColor: "#845EC2", alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Icon name="home" size={30} color="#fff" />
                    <Text style={styles.textIcon}>test</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: '#5E89C2', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="home" size={30} color="#900" />

            </View>
            <View style={{ flex: 1, backgroundColor: '#6AC066', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="home" size={30} color="#900" />

            </View>
        </>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({

    ShareButton: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        color: 'white',
        backgroundColor: 'blue'
    },
    NavbarBottom: {
        backgroundColor: 'yellow'
    },
})
