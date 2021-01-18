import tokenService from "./tokenService";

export function getPOIfromBackend(formData) {
  return fetch("/pickles/search",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Authorization': "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(formData),
    },
    { mode: "cors" }
  )
  .then((res) => res.json());
}
