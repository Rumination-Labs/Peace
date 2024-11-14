import { View, Text , Pressable , StyleSheet } from "react-native"
import Colors from "../../constants/Color";
function PrimaryButton({children, onPress}){
    
    function pressHandler(){

       onPress() //onPress function to pass valuee to parent 
    }
 return  (
 <View  style={styles.buttonOuterContainer}>
   <Pressable  
    onPress={pressHandler}
    android_ripple={{color:'#9febaa'}}
    style={(pressed)=> pressed ? [styles.pressed,styles.buttonInnerContainer] :styles.buttonInnerContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable> 
 </View>
 )
}

export default PrimaryButton

const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttonText:{
        color:"white",
        textAlign:'center',
        fontSize:14
    },
//styles for ripple on ios
    pressed:{
        opacity:0.75,

    }
})