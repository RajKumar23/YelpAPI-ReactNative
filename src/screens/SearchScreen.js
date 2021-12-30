import React, { useState } from "react"
import { StyleSheet, ScrollView, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResult from '../hooks/useResult'
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [getSearchValue, setSearchValue] = useState("")
    const [searchAPI, getRestaurant, getErrorMessage] = useResult()
    
    const filterResultByPrice = (price) => {
        return getRestaurant.filter((data) => data.price == price)
    }

    return (
        <View style={styles.container}>
            <SearchBar
                getSearchValue={getSearchValue}
                setSearchValue={setSearchValue}
                onSearchSubmit={() => searchAPI(getSearchValue)} />
            {/*console.log("clicked")*/}
            {/* {getErrorMessage ? <Text>{getErrorMessage}</Text> : null} */}
            {/* <Text>{getErrorMessage}</Text> */}
            <ScrollView>
                <ResultList title="$ Restaurants" data={filterResultByPrice("$")} />
                <ResultList title="$$ Restaurants" data={filterResultByPrice("$$")} />
                <ResultList title="$$$ Restaurants" data={filterResultByPrice("$$$")} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default SearchScreen