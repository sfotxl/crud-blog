import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blog) => blog.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Ionicons style={styles.icon} name='trash-sharp' />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderColor: 'purple',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
    }
})

export default IndexScreen;