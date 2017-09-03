
import callApi from './callApi'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'LOGOUT_USER'

const API_URL = 'http://localhost:3332'
console.log(process.env)

const loginUser = (context, { payload }) =>
  callApi(context, {
    type: USER_LOGIN,
    request: {
      url: API_URL + '/login',
      method: 'post',
      data: payload
    }
  })

const logoutUser = ({ commit }) => commit(USER_LOGOUT)

export const authActions = {
  loginUser,
  logoutUser
}
