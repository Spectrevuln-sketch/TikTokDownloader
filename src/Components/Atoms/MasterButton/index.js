import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MasterButton = ({ label, icon }) => {
    return (
        <View style={{ alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 19, marginVertical: '2%' }}>
                <View style={styles.contentLeft}>
                    <TouchableOpacity
                    >
                        {icon}
                        <Text style={{
                            color: '#fff',
                            paddingHorizontal: 5,
                            fontWeight: 'bold',
                            fontSize: 15
                        }}>HD</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentRight}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        {icon}
                        <Text style={styles.label}>DOWNLOAD</Text>
                        <Text style={{ color: '#fff', marginTop: '-5%' }}>Without Water Mark</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 19, marginVertical: '2%' }}>
                <View style={styles.contentLeft}>
                    <TouchableOpacity

                    >
                        {icon}
                        <Text style={{
                            color: '#fff',
                            paddingHorizontal: 5,
                            fontWeight: 'bold',
                            fontSize: 15
                        }} >HD</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentRight}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        {icon}
                        <Text style={styles.label}>DOWNLOAD</Text>
                        <Text style={{ color: '#fff', marginTop: '-5%' }}>Without Water Mark</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textContent}>is simply dummy text of the printing and typesetting industry.</Text>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'yellow' }}>
                        {/* IMAGE here */}
                    </View>
                    <Text style={{ color: '#fff' }}>is simply dummy text</Text>
                </View>
            </View>
        </View>
    )
}

export default MasterButton

const styles = StyleSheet.create({
    textContainer: {
        marginRight: 19,
        width: 190,
        height: 67,
        flexDirection: 'column'
    },
    textContent: {
        color: 'white'
    },
    contentLeft: {
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: '#fff',
        width: 40,
        height: 30,
        borderRadius: 5,
        marginRight: '5%'
    },
    contentRight: {
        backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: '#fff',
        width: 131,
        height: 32,
        borderRadius: 5,
    },
    label: {
        color: '#fff',
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 15
    }

})
