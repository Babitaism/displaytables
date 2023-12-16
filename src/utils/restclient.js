import { SERVER_END_POINT } from "../configs/configuration";

export default function restclient(params) {
  return fetch(`${SERVER_END_POINT}/${params.endPoint}`, {
    method: params.method,
    body: params.body,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((response) => {
      // console.log(" ********* API Response ********* ", response);
      // console.log(response.status,"status")
      if (response.status === 401) {
        console.log("hi");
      }
      return response;
    })
    .catch((error) => {
      if (error.status === 401) {
        console.log("request failed", error);
      }
      return error;
    });
}
