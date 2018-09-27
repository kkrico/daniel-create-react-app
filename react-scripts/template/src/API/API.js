const parseResponse = (response) => {
    return response.json();
}
class API {
    static loadAllPosts() {
        return fetch(process.env.REACT_APP_API_URL + "/posts")
            .then(parseResponse);
    }
    static getPost(id) {
        return fetch(process.env.REACT_APP_API_URL + "/posts/" + id)
            .then(parseResponse);
    }
}

export default API;