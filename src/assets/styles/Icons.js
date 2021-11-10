import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export const HomeIcon = ({ color, type, name }) => {
  return (
    <Icon
      reverse
      name='fi-fi-home'
      type='fontisto'
      color='blue'
    />
  )

}

const styles = StyleSheet.create({})
