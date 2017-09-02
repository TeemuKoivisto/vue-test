
import {
  USER_LOGIN,
  USER_LOGOUT,
  authActions
} from '@/actions/auth.actions'

const authState = {
  user: {},
  jwt: '',
  expires: 0
}

const authGetters = {
  isUserLoggedIn: state => state.user.id !== undefined,
  userLoggedIn: state => state.user,
  getJwt: state => state.jwt
}

const authMutations = {
  [`${USER_LOGIN}_SUCCESS`] (state, payload) {
    state.user = payload.user
    state.jwt = payload.jwt
    state.expires = payload.expires
  },
  [USER_LOGOUT] (state) {
    state.user = {}
    state.jwt = ''
    state.expires = 0
  }
}

export default {
  state: authState,
  getters: authGetters,
  mutations: authMutations,
  actions: authActions
}
