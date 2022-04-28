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
        backgroundColor:'#142e1b',
        height: 90,
        alignItems:'center',
        paddingHorizontal: 30
      },
      columnHeaderText: {
        color:'#e8ddcd',
        fontSize: 30,
        fontFamily:'DMSansRegular'
      }
    
});

export default Columns;