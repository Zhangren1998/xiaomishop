import {post} from '@/utils/request'

export const login = (data) => post('/api/v1/auth/login', data)
