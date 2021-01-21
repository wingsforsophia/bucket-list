import tokenService from '../services/tokenService'


export function create(item) {
    console.log(item)
  return fetch(`/trips/6009a4013684e7121cc15332/items`, {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(item)
  }, {mode: "cors"})
  .then(res => res.json())
}