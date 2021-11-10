import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ButtonHD = ({ label, icon }) => {
    return (
        <TouchableOpacity
            style={styles.contentRight}
        >
            {icon}
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonHD

const styles = StyleSheet.create({
    contentRight: {
        backgroundColor: '#FFE300',
        marginHorizontal: 150,
        marginTop: -33,
        padding: 5,
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2,
        right: 15
    },
    label: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 15
    }

})
