import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

// Components
import { HeadersApp, InputText, LargeButton, LongButton, MasterButton, BottomNavbar } from '../../Components'
import { HomeIcon } from '../../assets/styles/Icons'






const DownloadDetails = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* <HeadersApp />
                <InputText placeholder="Paste link here..." />
                <LargeButton label="DOWNLOAD" />
                <LongButton label="Information Detail" />
                <MasterButton label="DOWNLOAD" /> */}
                <Text style={{ color: '#fff' }}>Test</Text>
            </View>
            <View style={{ height: 35, backgroundColor: "yellow", flexDirection: 'row' }}>
                <BottomNavbar />
            </View>
        </SafeAreaView>
    )
}

export default DownloadDetails

const styles = StyleSheet.create({})

