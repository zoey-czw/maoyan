import axios from "axios";
import {HOST} from './url'

class Http {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    request(url,method='GET',data={}){
        let options= {
            url,
            method,
            baseURL: this.baseURL
        };
        if(method=='GET'){
            options = {
                ...options,
                params: data
            }
        }
        if(method=='POST'){
            options = {
                ...options,
                data,
            }
        }
        const INSTANCE = axios.create();
        return INSTANCE.request(options);
    }

    // get请求
    get(url, data = {}){
        return this.request(url, 'GET', data);
    }

    // post请求
    post(url, data = {}){
        return this.request(url, 'POST', data);
    }
}

export default new Http(HOST);