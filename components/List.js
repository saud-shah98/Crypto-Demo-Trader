
import React from 'react';
import {SafeAreaView,FlatList,StyleSheet,View} from 'react-native';
import Entry from './Entry';

const List = ({data,navigation, searchPhrase}) => {

    const renderItem = (({item}) => {
        if (searchPhrase ===""){
            return <Entry item={item} navigation={navigation} />
        }


        if (item.symbol.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))){
            return <Entry item={item} navigation ={navigation} />
        }
    })
    return(
        <SafeAreaView style={styles.list__container}>
        <View
          onStartShouldSetResponder={() => {
            setClicked(false);
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            
          />
        </View>
      </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    list__container: {
      margin: 10,
      height: "85%",
      width: "100%",
    },
  });

export default List;