import axios from "axios";
import {useUserStore} from "../store/user";


// 配置基础 axios
const httpInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
});

// 配置请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore();
    if (userStore.isLogin) {
        config.headers.Authorization = 'Bearer ' + userStore.userInfo.token;
    }
    return config;
}, error => Promise.reject(error));

httpInstance.interceptors.response.use(res => {
    return res.data;
}, error => Promise.reject(error));
export default httpInstance;