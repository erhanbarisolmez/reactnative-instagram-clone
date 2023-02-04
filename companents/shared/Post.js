import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Dots, Heart, Share, Bookmark, Comment } from "../../Icons";
import FitImage from "./FitImage";
function Post({post}) {
    return ( 
        <View>
            <View style={styles.header}>
               <View style = {styles.username}> 
               <Image 
                style={styles.avatar}
                source={{
                    uri: post.user.avatar
                }}
                  />
                  <Text style={styles.title}>{post.user.name}</Text>
               </View>
                <Dots size={16} fill='#262626'/>
            </View>
            <FitImage src = {post.image} />
            <View style={styles.actions}>
                <View style={styles.leftAction}>
                    <TouchableOpacity style={styles.action} activeOpacity='0.7'>
                    <Heart size={24} fill='#222'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} activeOpacity='0.7'>
                    <Comment size={24} fill='#222'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} activeOpacity='0.7'>
                    <Share size={22} fill='#222'/>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity activeOpacity='0.7'>
                <Bookmark size={24} fill='#222'/>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Post;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height:49,
        paddingHorizontal:15,
    },
    actions : {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: 40,
     paddingHorizontal:15
      
    },
    leftAction: {
        flexDirection: 'row',
        
    },
    action: {
        marginRight: 12
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
       
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    title: {
        fontSize:14,
        fontWeight:'600'
    }
})