import axios from 'axios';
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
    baseURL: '', // url = base url + request url
    timeout: 50000, // request timeout
    withCredentials: true, // cookie
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        const c = { ...config };
        let param = { param: JSON.stringify(config.param || {}) };
        if (config.method === 'get') {
            c.params = param;
        } else if (config.method === 'post') {
            c.data = param;
        }
        return c;
    },
    (error) => {
        console.error(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.state === 'err') {
            ElMessage({
                message: res.value || 'Error',
                type: 'error',
                duration: 5 * 1000,
            });
            return Promise.reject(new Error(res.value || 'Error'));
        }
        return res;
    },
    (error) => {
        console.log(`err${error}`); // for debug
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);

export default service;
