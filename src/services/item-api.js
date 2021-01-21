import tokenService from '../services/tokenService'


export function create(item, tripId) {
   return fetch(`/trips/${tripId}/items`, {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(item)
  }, {mode: "cors"})
  .then(res => res.json())
}

export function getAll(items, tripId) {
    return fetch (`/trips/${tripId}/items`, {
        mode: 'cors'
    }).then(res => res.json(items))

}