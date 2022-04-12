import {
  get,
  dele
} from '@/utils/request'

export const loadCartAPI = () => get('/api/v1/shop_carts')

export const delCartProduct = (id) => dele(`/api/v1/shop_carts/` + id)
