import axios from "axios";
import {useAccountStore} from "@/store/useAccountStore";

const accountStore = useAccountStore();

// 配置基础 axios
const httpInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

// 配置请求拦截器
httpInstance.interceptors.request.use(config => {
    config.Authorization = 'Bearer ' + accountStore.user.token;
    return config;
}, error => Promise.reject(error));

httpInstance.interceptors.response.use(res => {
   return res.data;
}, error => Promise.reject(error));
export default httpInstance;