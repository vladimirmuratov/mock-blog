import axios from "axios";

const instance = axios.create({
    withCredentials: true
})

export const fetchArticlesApi = async () => {
    const response = await instance.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
    return response

}

export const fetchUsersApi = async () => {
    const response = await instance.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
    return response
}