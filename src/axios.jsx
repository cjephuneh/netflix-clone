import axios from "axios"
/**base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviesdb.org/3"
})

export default instance