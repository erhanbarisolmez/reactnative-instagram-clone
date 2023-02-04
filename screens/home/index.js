import {View, Text, StyleSheet} from "react-native";
import Header from "./companents/Header";
import Stories from "./companents/Stories";
import posts from "../../data/posts";
import Post from "../../companents/shared/Post";
function Home() {
    return(
    <View style={styles.container}>
         <Header />
         <Stories />
         {posts.map(post => 
         <Post key={post.id} post={post}/>)}
    </View>
       
    )
}

export default Home;

const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    }
})