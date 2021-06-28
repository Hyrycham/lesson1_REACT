import axios from 'axios';
let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
let axiosInstance = axios.create(options);

const getUsers = ()=> axiosInstance('/users');
const getUser = (id)=> axiosInstance('/users/'+ id);
// const getPosts = ()=> axiosInstance('/posts');
const getPost = (id)=> axiosInstance('/users/'+ id+'/posts');

export {getUsers,getUser,getPost};