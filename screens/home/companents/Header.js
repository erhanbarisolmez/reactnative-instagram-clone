import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Logo, Heart, Plus, Messenger } from "../../../Icons";

function Header() {
    return (
        
       <View style={styles.header}>
        <Logo size={104} fill="#000" />
        <View style={styles.actions}>

        <TouchableOpacity activeOpacity={0.6}>
            <Plus size={24}  fill="#000"/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style= {styles.dotContainer}>
        <View style={styles.dot}></View>
        </View>

            <Heart size={24} fill="#000"  style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}  >
            <Messenger size={24} fill="#000" style={styles.button} />
        </TouchableOpacity>
            
        </View>
       </View>

      );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop:20,
        backgroundColor:'white',
        height:80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
    },
    button:{ 
        marginLeft:20,
   
    },
    dot:{
        
        backgroundColor: '#FF4963',
        width: 7,
        height: 7,
        borderRadius: 10,

    },
    dotContainer : {
        zIndex : 2,
        width:8, 
        height: 8,
        backgroundColor: '#fff',
        borderRadius:11,
        alignItems: 'center',
        justifyContent : 'center',
        position:'absolute',
        top: 0,
        right: 0,
    }
    
})