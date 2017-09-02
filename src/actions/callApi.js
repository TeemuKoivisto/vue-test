
import axios from 'axios'

export default (context, request) => {
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
    return context.commit(`${request.type}_SUCESS`, res.data)
  })
  .catch((err) => {
    return context.commit(`${request.type}_FAIL`, err.data)
  })
}
