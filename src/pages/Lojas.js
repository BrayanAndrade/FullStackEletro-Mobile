
import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import TextCenter from '../components/TextCenter'



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rio de Janeiro',
    ad: 'Avenida Presidente Vargas, 5000',
    phone: '(99) 9999-9999'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'São Paulo',
    ad: 'Avenida Paulista, 985',
    phone: '(99) 9999-9999'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Santa Catarina',
    ad: 'Rua Major vila',
    phone: '(99) 9999-9999'
  },
];



const Item = ({ title, ad, phone }) => (
  <View style={styles.item}>
    <Text style={styles.titulo}>{title}</Text>
    <Text style={styles.title}>{ad}</Text>
    <Text style={styles.title}>{phone}</Text>

  </View>
);





const Lojas = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} ad={item.ad} phone={item.phone} />
  );
 

  return (
    

    <SafeAreaView style={styles.container} >
      
      <TextCenter text="Nossas Lojas" />
      <FlatList style={styles.flat}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        
      />
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#e8e6e6',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  titulo: {
    color: '#000',
    fontSize: 25,
    fontWeight: 550
  },
  flat:{
    borderRadius: 30,
  }
});



export default Lojas
