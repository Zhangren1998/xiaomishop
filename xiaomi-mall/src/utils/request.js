import axios from 'axios';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
// export const serveUrl = 'https://grumpy-fireant-26.loca.lt'
export const serveUrl = 'http://192.168.1.13:1337'

export const instance = axios.create({
  baseURL: serveUrl,
  timeout: 5000,
})
export const get = (url, params) => instance.get(url, {
  params
})

export const post = (url, params) => instance.post(url, params)

export const put = (url, params) => instance.put(url, params)

export const dele = (url, params) => instance.delete(url, params)

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  NProgress.start()
  let token = sessionStorage.getItem("token"); //获取到从后端传来的token，然后存到session里面
  if (token) {
    config.headers.token = token; //然后赋值就行
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  NProgress.done()
  return response;
}, function (error) {
  NProgress.done()
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
