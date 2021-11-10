import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
/** Navigator  */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** Pages */
import { DownloadDetails, SemuaVideoGambar } from './Pages';
/** End Pages */
const Stack = createNativeStackNavigator();
/** End Navigator  */


const Routes = () => {
    const ColorScheme = useColorScheme();
    return (
        <NavigationContainer>
            {/* Download Details */}
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Download Details" component={DownloadDetails} />
            </Stack.Navigator>
            {/* Download Details */}
            {/* Download Details */}
            {/* <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Semua Video" component={SemuaVideoGambar} />
            </Stack.Navigator> */}
            {/* Download Details */}
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})
