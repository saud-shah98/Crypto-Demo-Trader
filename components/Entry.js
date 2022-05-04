import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { Foundation } from '@expo/vector-icons'; 

const Entry = ({item, navigation}) => {
    return ( 
        <TouchableOpacity onPress={()=> navigation.navigate('Detail',{item:item})}>

        <View style={styles.row}>
        
        <View style={styles.columns}>
            <Text style={styles.labels}>Name</Text>
            <Text style={styles.rowName}>{item.name}</Text>
          </View>

          <View style={styles.columns}>
            <Text style={styles.labels}>Symbol</Text>
            <Text style={styles.rowSymbol}>{item.symbol}</Text>
          </View>

          <View style={styles.columns}>
            <Text style={styles.labels}>Price</Text>
            <View style={styles.priceColumn}>
              <Foundation name="dollar" size={25} color="green" style={{marginRight:5}} />
              <Text style={styles.rowPrice}>{item.price_usd}</Text>
            </View>
          </View>

          <View style={styles.columns}>
            <Text style={styles.labels}>Rank</Text>
            <Text style={styles.rowRank}>{item.rank}</Text>
          </View>
        

          </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    row: {
        backgroundColor:'firebrick',
        flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', height:100,
        marginVertical:10
      },
      rowSymbol:{
        fontSize:16,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular',
        
      },
      rowName:{
        fontSize:16,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      },
      rowRank:{
        fontSize:16,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      },
      rowPrice:{
        marginRight: 10,
        fontSize:16,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      },
      columns:{
        alignItems:'center',marginHorizontal:5
      },
      labels:{
        color:'white',
        fontSize:12
      },
      priceColumn:{
        flexDirection:'row',justifyContent:'center',alignItems:'center',
      }
})

export default Entry;
