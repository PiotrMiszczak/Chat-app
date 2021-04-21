import {StyleSheet} from 'react-native'


const Styles = StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        borderRadius:50,
        marginRight: 12

    },
    container:{
        backgroundColor:'#f7f8f8',
        width:'auto',
        
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        flexGrow:0,
        
        
        
    },
    containerLeft:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        
        flexDirection:'row',
       
        
       
    },
    textBox:{
        justifyContent:'space-between',
        
        
       
    },
    textName:{
        fontSize:16,
        fontWeight:'bold',
          
       
    },
    textMessage:{
        fontSize:16,
        color:'grey',
        
        
          
       
    },
    textTime:{
        fontSize:14,
        color:"grey"
    }
   
   
   

})

export default Styles