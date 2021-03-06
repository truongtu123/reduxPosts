import axios from 'axios';

export const FETCH_POSTS='FETCH_POSTS';
export const FETCH_POST='FETCH_POST';
export const CREATE_POST='CREATE_POST';
export const DELETE_POST='DELETE_POST';

const  ROOT_URL = 'http://reduxblog.herokuapp.com/api';//'?key=truongtu268'
const API_KEY='';
export function fetchPosts(){
    const res = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: res
    }
}

export function createPosts(props){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: CREATE_POST,
        payload:request
    }
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload:request
    }
}

export function deletePosts(id){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: DELETE_POST,
        payload:request
    };
}