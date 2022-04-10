import {get} from '@/utils/request'
export const getInfo=(params)=>get('/api/v1/user/info',params)
