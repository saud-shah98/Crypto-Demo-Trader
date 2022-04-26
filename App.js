import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import coins from './coins.json';
import Entry from './components/Entry';
import Columns from './components/Columns';

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
}, []);

    return(
      <View style={styles.container}>
        {loading ? <Text>Loading</Text>:(
        <View style={styles.card}>
          <Columns />
          <FlatList data={coins.data} keyExtractor={coins.data.id} renderItem={Entry} />
        </View>
        )}
     </View>

    )
  };


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding: 25,
    backgroundColor:'white',
  },
  card: {
    width:'100%'
  },
});
