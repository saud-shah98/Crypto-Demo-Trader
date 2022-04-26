import {View,StyleSheet,Text} from 'react-native';

const Entry = ({item}) => {
    return ( 
        <View style={styles.row}>
        <Text style={styles.rowSymbol}>{item.symbol}</Text>
        <Text style={styles.rowPrice}>{item.price_usd}</Text>
        <Text style={styles.rowRank}>{item.rank}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    row: {
        marginTop: 10,
        backgroundColor:'whitesmoke',
        borderRadius:3,
        borderColor:'white',
        borderWidth:5,
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:30, paddingVertical:50
      },
      rowSymbol:{
        fontSize:25,
        color:'green'
      },
      rowRank:{
        fontSize:25,
        color:'green'
      },
      rowPrice:{
        marginRight: 10,
        fontSize:22,
        color:'green'
      }
})

export default Entry;
