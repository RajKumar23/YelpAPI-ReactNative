import React from "react"
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ getSearchValue, setSearchValue, onSearchSubmit }) => {
    return (
        <View style={styles.container} >
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                onChangeText={setSearchValue}
                onEndEditing={onSearchSubmit}
                value={getSearchValue} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#F0EEEE',
        justifyContent: 'flex-start',
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    iconStyle: {
        marginHorizontal: 10,
        alignSelf: "center",
        fontSize: 35,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar