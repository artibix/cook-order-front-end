import { request, authRequest } from '@/utils/request'

export function getCurrentUser() {
  return authRequest('api/user')
}