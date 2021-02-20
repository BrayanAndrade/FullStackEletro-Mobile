import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import TextCenter from '../components/TextCenter';


const Produtos = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);



  return (
    <SafeAreaView style={css.container}>
   
    <TextCenter text="Produtos" /> 
    
    <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        numColumns={1}
        renderItem={({item})=>(

        <View >
       <Text style={css.titulo}>{item.descricao}</Text>,
        <View style={css.card}>
          <Image  style={{width: 100, height: 100, marginLeft: 12}} source={require(`${item.imagem}`)} />          
        <View style={css.precos}>
          <Text style={css.precoinicial}>De: R$ {item.preco}</Text><br />
          <Text style={css.precofinal}>Por: R${item.preco_venda}</Text>
        </View>
        </View>       
        </View>
        )}
      />   
  </SafeAreaView>
  )
}
const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1b1b1b'
        // marginTop: StatusBar.currentHeight || 0,
      },
  card: {
      flexDirection: 'row',
      borderRadius: 30,
    //   borderColor: '#f54242',
      borderWidth: 5,
      backgroundColor: '#fff',
      marginHorizontal: 19,
  },
  precos: {
    flexDirection: 'column',
    marginTop: 20
  },

  precoinicial: {
    fontSize: 20,
    color: 'gray',
    textDecorationLine: 'line-through'
  },

  precofinal: {
    fontSize: 30,
    color: 'red',
    fontWeight: 600,
    marginbottom: 30
  },

  titulo: {
    fontSize: 24,
    marginTop: 10,
    color: 'white',
    marginHorizontal: 45,
  }

})

export default Produtos
