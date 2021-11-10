import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import styled from 'styled-components'
// Component
import { HeadersApp, VideoItems, ScreenTitle, BottomNavbar } from '../../Components'

const Data = [
    {
        id: 1,
        text: 'is simply dummy text of the printing and typesetting'
    },
    {
        id: 2,
        text: 'is simply dummy text of the printing and typesetting'
    },
    {
        id: 3,
        text: 'is simply dummy text of the printing and typesetting'
    },
    {
        id: 4,
        text: 'is simply dummy text of the printing and typesetting'
    },

]


const SemuaVideoGambar = () => {


    const VideoRender = ({ item }) => (
        <VideoItems text={item.text} />

    )
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ flex: 1 }}>
                <HeadersApp />
                <ScreenTitle />
                <FlatList
                    style={styles.cardSlider}
                    data={Data}
                    renderItem={VideoRender}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ height: 35, backgroundColor: "yellow" }}>

            </View>
        </SafeAreaView>
    )
}

export default SemuaVideoGambar

const styles = StyleSheet.create({

    cardSlider: {
        marginTop: 5
    }

})
