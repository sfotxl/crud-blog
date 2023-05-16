import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.title}>Create</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'purple'
    }
});


export default CreateScreen;