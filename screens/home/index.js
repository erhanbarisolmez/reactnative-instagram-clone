import {View, Text, StyleSheet,ScrollView} from "react-native";
import Header from "./companents/Header";
import Stories from "./companents/Stories";
import posts from "../../data/posts";
import Post from "../../companents/shared/Post";
import Divider from "../../companents/shared/Divider";


function Home() {
    return(
        <>
    <Header />
    <ScrollView 
    stickyHeaderIndices={[1]}
    style={styles.container}>
       
         <Stories />
         <Divider />
         {posts.map(post => 
         <Post key={post.id} post={post}/>)}
    </ScrollView>
    </>
    )
}

export default Home;

const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    }
})