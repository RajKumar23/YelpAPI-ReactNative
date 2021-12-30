import { React } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultDetail = ({ item }) => {
    return <View style={styles.viewStyle}>
        <Image
            style={{ height: 120, width: 250, borderRadius: 4, marginBottom:5 }}
            source={{ uri: item.image_url }} />
        <Text style={styles.contentTextNameStyle}>{item.name}</Text>
        <Text>{item.rating} Rating, {item.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: "gray",
        borderWidth: 0,
        marginHorizontal: 10,
        marginVertical:5
    },
    contentTextNameStyle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16
    },
});

export default ResultDetail