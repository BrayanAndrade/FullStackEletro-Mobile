import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TextCenter( {text}) {
    return (
        
            <View style={styles.container}>
                <Text style={styles.text}>
                    {text}
                </Text> 

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
 

    },
    text: {
        fontSize: 50,
        color: '#fff'
    }
})

export default TextCenter

