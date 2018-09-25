const parseResponse = (response) => {
    return response.json();
}
class API {
    static loadAllPosts() {
        return fetch(process.env.REACT_APP_API_URL + "/posts")
            .then(parseResponse);
    }
}

export default API;