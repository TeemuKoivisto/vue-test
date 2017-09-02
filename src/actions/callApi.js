
import axios from 'axios'

export default (context, { type, request }) => {
  return axios({
    url: request.url,
    method: request.method,
    data: request.data,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${context.getters.getJwt}`
    }
  })
  .then((res) => {
    return context.commit(`${type}_SUCCESS`, res.data)
  })
  .catch((err) => {
    return context.commit(`${type}_FAIL`, err.data)
  })
}
