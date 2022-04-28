import {View,Text,StyleSheet} from 'react-native';


const Detail = ({route, navigation}) => {
    const {item} = route.params;
    console.log(item)
    let details =  {'Name':item.name,
          'Rank':item.rank,
          'Price USD':item. price_usd,
          'Percentage Change 24hrs':item.percent_change_24h,
          'Percentage Change 1hr':item.percent_change_1h,
          'Percentage Change 7d':item.percent_change_7d,
          'Price in BTC':item.price_btc,
          'Market Cap USA':item.market_cap_usd}

   
    return (
        <View style={styles.container}>
             {Object.entries(details).map(([id,value]) => {
                return(
                <View key={id} style={styles.idVals}>
                    <Text style={styles.id}>{id}</Text>
                    <Text style={styles.val}>{value}</Text>
                    
                 </View>

                 
                )
            })}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    idVals:{
        flexDirection:'row',
        paddingHorizontal:30,
        paddingVertical:25,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'grey',
        borderWidth:10,
        borderColor:'whitesmoke',
        borderBottomColor:'whitesmoke'
    },
    id:{
        fontSize: 20,
        color:'#e8ddcd'

    },
    val:{
        color:'#e8ddcd'
    }
});

export default Detail;