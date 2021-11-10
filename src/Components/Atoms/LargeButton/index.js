import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const LargeButton = ({ icon, label, ...rest }) => {
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity
                style={styles.button}
            >
                {icon}
                <Text style={styles.labelText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LargeButton

const styles = StyleSheet.create({
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    button: {
        flexDirection: 'column',
        backgroundColor: "#FFE300",
        width: 285,
        height: 40,
        borderRadius: 10
    },
    labelText: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 30,
    }
})
