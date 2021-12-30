import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList, ImageBackground, Dimensions } from 'react-native';
import yelp from "../api/yelp";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ResultDetailScreen = ({ navigation }) => {
    const [getRestaurantDetails, setRestaurantDetails] = useState(null)
    const idToFetch = navigation.getParam("id")
    const win = Dimensions.get('window');

    const getRestaurantsDetail = async (idToFetch) => {
        try {
            const response = await yelp.get(`/${idToFetch}`)
            setRestaurantDetails(response.data)
            console.log(getRestaurantDetails)
        } catch (error) {
            // console.log(error)
            setErrorMessage(error)
        }
    }

    useEffect(() => {
        getRestaurantsDetail(idToFetch)
    }, [])

    if (!getRestaurantDetails) {
        return null
    } else
        return <View style={styles.viewStyle}>
            <ImageBackground
                source={{ uri: getRestaurantDetails.image_url }}
                style={styles.banerImageStyle}>
                <View style={styles.bannerViewStyle}>
                    <Text style={styles.titleTextStyle}>{getRestaurantDetails.name}</Text>
                    <Text style={styles.titleTextStyle}>{getRestaurantDetails.rating}</Text>
                </View>
            </ImageBackground>
            <View style={{
                borderRadius: 3, elevation: 3, marginTop: 15, padding: 8
            }}>
                <Text style={{
                    fontWeight: "bold", fontSize: 16, alignSelf: "center"
                }}>Address</Text>
                <FlatList
                    data={getRestaurantDetails.location.display_address}
                    keyExtractor={string => string}
                    renderItem={({ item }) => {
                        return (
                            <Text style={{ color: "black" }}>
                                {item}
                            </Text>
                        )
                    }} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                <MaterialCommunityIcons name="phone" size={25} style={{ alignItems: "center" }} />
                <Text>{getRestaurantDetails.display_phone}</Text>
            </View>

            <View>
                <Text style={{
                    fontWeight: "bold", fontSize: 16, marginTop: 15
                }}>
                    Galary Images
                </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={getRestaurantDetails.photos}
                    keyExtractor={photo => photo}
                    renderItem={({ item }) => {
                        return <Image
                            style={styles.galaryImageStyle}
                            source={{ uri: item }} />
                    }} />
            </View>

        </View>

}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 10,
        flex: 1,
    },
    banerImageStyle: {
        height: 200,
        width: null,
        alignItems: "flex-end",
        flexDirection: "row",
        borderRadius: 4
    },
    bannerViewStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleTextStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        margin: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.65)'
    },
    galaryImageStyle: {
        flex: 1,
        height: 250,
        width: 200,
        //Dimensions.get('window').width
        borderRadius: 4,
        marginTop: 5,
        marginEnd: 10,
        alignSelf: "center",
        borderRadius: 15,
    }
})

export default ResultDetailScreen