import axios from 'axios';
export const serveUrl = 'https://grumpy-fireant-26.loca.lt'
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
