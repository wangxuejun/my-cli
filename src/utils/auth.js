import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token, expire) {
  return Cookies.set(TokenKey, token, {expires: expire / 60 / 60 / 24})
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
