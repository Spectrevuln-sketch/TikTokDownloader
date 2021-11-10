import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'




const VideoItems = ({ text }) => {
    return (
        <View style={styles.Box}>
            <Text style={styles.TextContent}>{text}</Text>
            <TouchableOpacity style={styles.roundedButton}>
                <Text>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VideoItems

const styles = StyleSheet.create({
    roundedButton: {
        top: -20,
        backgroundColor: 'red',
    },
    Box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 337,
        height: 105,
        paddingVertical: 28,
        paddingHorizontal: 5,
        marginHorizontal: 30,
        marginTop: 5
    },
    TextContent: {
        color: '#fff',
        fontSize: 10,
        width: 150,
        right: -110,
        top: -20
    }


})
