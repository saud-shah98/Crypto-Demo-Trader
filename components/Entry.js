import {View,StyleSheet,Text} from 'react-native';
import { Foundation } from '@expo/vector-icons'; 
const Entry = ({item}) => {
    return ( 
        <View style={styles.row}>
        <Text style={styles.rowSymbol}>{item.symbol}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>

        <Foundation name="dollar" size={25} color="green" style={{marginRight:5}} />
        <Text style={styles.rowPrice}>{item.price_usd}</Text>
        </View>
        <Text style={styles.rowRank}>{item.rank}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    row: {
        marginTop: 4,
        backgroundColor:'#1a1b1c',
        borderRadius:3,
        borderColor:'#142e1b',
        borderBottomWidth:8,
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:30, paddingVertical:30
      },
      rowSymbol:{
        fontSize:25,
        color:'#e8ddcd'
      },
      rowRank:{
        fontSize:25,
        color:'#e8ddcd'
      },
      rowPrice:{
        marginRight: 10,
        fontSize:22,
        color:'#e8ddcd'
      }
})

export default Entry;
