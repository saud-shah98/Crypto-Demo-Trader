import {View,StyleSheet,Text, TouchableOpacity} from 'react-native';
import { Foundation } from '@expo/vector-icons'; 

const Entry = ({item, navigation}) => {
    return ( 
        <TouchableOpacity onPress={()=> navigation.navigate('Detail',{item:item})}>

        <View style={styles.row}>
        
          <View>
            <Text style={{color:'white', fontSize:12 }}>Symbol</Text>
            <Text style={styles.rowSymbol}>{item.symbol}</Text>
          </View>

          <View style={{alignItems:'center'}}>
            <Text style={{color:'white',fontSize:12}}>Price</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
              <Foundation name="dollar" size={25} color="green" style={{marginRight:5}} />
              <Text style={styles.rowPrice}>{item.price_usd}</Text>
            </View>
          </View>

          <View style={{alignItems:'center'}}>
            <Text style={{color:'white'}}>Rank</Text>
            <Text style={styles.rowRank}>{item.rank}</Text>
          </View>
        

          </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    row: {
        backgroundColor:'#1a1b1c',
        borderColor:'#142e1b',
        borderBottomWidth:8,
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:32, paddingVertical:10
      },
      rowSymbol:{
        fontSize:25,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      },
      rowRank:{
        fontSize:25,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      },
      rowPrice:{
        marginRight: 10,
        fontSize:22,
        color:'#e8ddcd',
        fontFamily:'DMSansRegular'
      }
})

export default Entry;
