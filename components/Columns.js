import {View,StyleSheet,Text} from 'react-native';


const Columns = () => {
    return(

    <View style = {styles.columns}>
        <Text style={styles.columnHeaderText}>Symbol</Text>
        <Text style={styles.columnHeaderText}>Price</Text>
        <Text style={styles.columnHeaderText}>Rank</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    columns:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'darkred',
        height: 90,
        alignItems:'center',
        paddingHorizontal: 40
      },
      columnHeaderText: {
        color:'white',
        fontSize: 30,
      }
    
});

export default Columns;