import {
  get
} from '@/utils/request'
export const loadProducts = (params) => get('/api/v1/products', params)
