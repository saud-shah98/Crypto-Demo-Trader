import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import AppStyles from '../../AppStyles';

const Detail = ({details}) => {
 
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
            
             <TouchableOpacity style={{width:'100%', justifyContent:'center',alignItems:'center', backgroundColor:'green', paddingVertical:25}}>
                 <Text style={{color:'white',fontSize:20}}>Buy</Text>
            </TouchableOpacity>
           
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    idVals:{
    
        backgroundColor:'#1a1b1c',
        borderRadius:3,
        borderColor:'#142e1b',

        borderBottomWidth:8,
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',flex:1, paddingHorizontal: 25
    },
    id:{
        fontSize: 20,
        color:AppStyles.theme_1.WHEAT

    },
    val:{
        color: AppStyles.theme_1.WHEAT
    }
});

export default Detail;