import apiClient from "./axios";

export function getData(id) {
  return apiClient
    .get(`/posts/${id}`)
    .then(response => {
      if (response) {
        return response.data;
      }
      return false;
    })
    .catch(error => {
      console.log("API: getData() Error: ", error);
      return false;
    });
}

export function testFunction() {}
