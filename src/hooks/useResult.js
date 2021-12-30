import { useState, useEffect } from "react"
import yelp from "../api/yelp";

export default () => {
    const [getRestaurant, setRestaurant] = useState([])
    const [getErrorMessage, setErrorMessage] = useState("")

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get("search", {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: "san jose"
                }
            })
            setRestaurant(response.data.businesses)
        } catch (error) {
            // console.log(error)
            setErrorMessage(error)
        }
    }

    useEffect(() => {
        searchAPI("dosa")
    }, [])

    return [searchAPI, getRestaurant, getErrorMessage]
}
