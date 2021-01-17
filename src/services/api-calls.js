import tokenService from "./tokenService";

export function getPOIfromBackend(formData) {
  console.log(formData);
  return fetch("/pickles/search",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
    //   body: JSON.stringify(formData),
    },
    { mode: "cors" }
  )
  .then((res) => res.json());
}
