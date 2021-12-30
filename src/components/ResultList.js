import { React } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, data, navigation }) => {
    if (!data.length)
        return null
    else
        return <View style={{ marginVertical: 8 }}>
            <View style={styles.titleStyle}>
                <Text style={styles.titleTextStyle}>{title}</Text>
                <Text style={styles.titleCountTextStyle}>{data.length} found</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() =>
                        navigation.navigate("ResultDetail",
                            {
                                id: item.id
                            }
                        )}>
                        <ResultDetail item={item} />
                    </TouchableOpacity>
                }}

            />
        </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    titleTextStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    titleCountTextStyle: {
        color: "red"
    },
});

export default withNavigation(ResultList)
