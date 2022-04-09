import {
  get
} from '@/utils/request'
export const getDetails = (id) => get(`/api/v1/products/${id}`)
