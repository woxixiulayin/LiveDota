import ajax from 'js/lib/ajax'
import assert from 'js/lib/assert'

export const fetchLives = ({category = '', site = ''}) =>
  ajax.get(`/${category}/${site}`)
  .then(data => {
    assert(Array.isArray(data), 'lives should be an array')
    return data
  })

