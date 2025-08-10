import axios from "axios";

const apiClient = axios.create();

apiClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
},
    { synchronous: true, runWhen: () => true}
);

apiClient.interceptors.response.use(function onFulfilled(response) {
    return response;
}, function onRejected(error) {
    return Promise.reject(error);
});

export default apiClient;