import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const InputText = ({ icon, placeholder, ...rest }) => {
    return (
        <View style={styles.inputWrapper}>
            {icon}
            <TextInput
                {...rest}
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    input: {
        backgroundColor: '#fff',
        marginTop: 45,
        height: 49,
        width: 313,
        borderRadius: 20
    }
})
