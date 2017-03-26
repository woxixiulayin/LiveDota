import axios from 'axios'

export default {
  get (path) {
    return axios.get(encodeURI(path))
      .then(res => {
        if (res.status === 200) {
          return res.data
        } else {
          throw Error(`get ${path} failed, status: ${res.status}`)
        }
      })
  },
  post (path, data) {
    return axios.post(encodeURI(path), data)
      .then(res => {
        if (res.status === 200) {
          return res.data
        } else {
          throw Error(`get ${path} failed, status: ${res.status}`)
        }
      })
  }
}
