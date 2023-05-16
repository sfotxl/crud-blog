import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context); 
    
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'purple'
    }
});


export default ShowScreen;