import {
  get,
  post
} from '@/utils/request'
export const getDetails = (id) => get(`/api/v1/products/${id}`)

export const addCart = (data) => post(`/api/v1/shop_carts/`, data)
