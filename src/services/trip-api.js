import tokenService from '../services/tokenService'


export function create(trip) {
    return fetch('/vanilla', {
          method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(trip)
    }, {mode: "cors"})
    .then(res => res.json());
  }