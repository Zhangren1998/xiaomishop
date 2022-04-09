import {
  get
} from '@/utils/request'

export const productCategories = () => get('/api/v1/product_categories')
