import {
  post
} from '@/utils/request'

export const reg = (data) => post('/api/v1/auth/reg', data)
