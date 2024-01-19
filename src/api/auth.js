import { request } from '@/utils/request'

export function login(data) {
  return request('weapp/auth', {
    method: 'post',
    data: data
  })
}

export function refresh(token) {
  return request('auth/current', {
    method: 'put',
    data: {
      "token": token
    }
  })
}

export function logout(token) {
  return request('auth/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export function getCaptcha(phone) {
  return request('api/captchas', {
    method: 'post',
    data: {
      phone: phone
    }
  })
}

export function getVerificationCode(key, code) {
  return request('api/verificationCodes', {
    method: 'post',
    data: {
      captcha_key: key,
      captcha_code: code
    }
  })
}

export function register(data) {
  return request('api/weapp/users', {
    method: 'post',
    data: data
  })
}