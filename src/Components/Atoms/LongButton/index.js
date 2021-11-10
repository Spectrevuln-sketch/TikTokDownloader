import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LongButton = ({ label, icon }) => {
    return (
        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 33 }}>
            <TouchableOpacity
                style={styles.contentRight}
            >
                {icon}
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LongButton

const styles = StyleSheet.create({
    contentRight: {
        backgroundColor: '#FFE300',
        marginRight: 19,
        width: 191,
        height: 20,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2,
    },
    label: {
        color: "#fff",
        fontSize: 15,
        fontWeight: '700',
    }

})
