import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'

const HeadersApp = () => {
    return (
        <View>
            <View styles={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.textLogo}>TikTok Downloader</Text>
                </View>
                {/* <View style={styles.sideWrapper}></View> */}
            </View>
            <View style={styles.secondaryContainer}>
                <Divider orientation="horizontal" width={15} color="#FFE300" style={styles.deviderHeader} />
                <Text style={styles.secondaryHeader}>by Socially</Text>
            </View>
        </View>
    )
}

export default HeadersApp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    logoContainer: {
        alignItems: 'center'
    },
    textLogo: {
        color: 'white',
        fontSize: 40,
        fontWeight: '600',
        paddingTop: 10
    },
    secondaryContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secondaryHeader: {
        color: '#fff',
        paddingRight: '10%',
        fontSize: 25,
        fontWeight: '900'
    },
    deviderHeader: {
        position: 'absolute',
        width: 131,
        top: 0,
        bottom: '35%',
        left: '10%',
        right: 0,
        zIndex: -100
    }


})
