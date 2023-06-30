import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FlexScren = () => {
  return (
    <View style={styles.container}>
        <Text>Caja 1</Text>
        <Text>Caja 2</Text>
        <Text>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});