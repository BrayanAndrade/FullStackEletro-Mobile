import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityBase, StyleSheet, Image, ImageBackground} from 'react-native'
import TextCenter from '../components/TextCenter'

const BG_IMG = 'https://i.pinimg.com/originals/92/7c/07/927c07dc27f1db0ede925d8a7667c062.jpg'

const Home = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            
            <ImageBackground
                source={{uri: BG_IMG}}
                style={StyleSheet.absoluteFillObject}
                blurRadius={1}
            />
            <TextCenter text="FullBlack Eletro"/> 
        </View>
    )
}

export default Home