import {
  post
} from '@/utils/request'

export const reg = (data) => post('/api/v1/auth/reg', data)

export const upFile = (file) => post('/api/v1/common/upload_file', file)
