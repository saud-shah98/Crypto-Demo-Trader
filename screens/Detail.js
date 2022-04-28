import {View,Text,StyleSheet} from 'react-native';


const Detail = ({route, navigation}) => {
    const {item} = route.params;
    console.log(item)
   
    return (
        <View style={styles.container}>
             {Object.entries(item).map(([id,value]) => {
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
        backgroundColor:'#1a1b1c',
        borderWidth:10,
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