import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses/",
    headers:{
        Authorization: "Bearer tChToKqaxJvDdMtFzrk1qfNRctqyE0eWz7IGtafxq0qgWTbORQjs5u8-gVFv8nSXfOcR5g6oAQftq4g6wwg8k2frCX4m89KjHVfzExWfuPb2JqY75QifOBnmFjrAYXYx"
    }
})