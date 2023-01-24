import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/"

export const getUsers = (currentPage: number, pageSize: number) => {
  return axios.get(BASE_URL + `users?page=${currentPage}&count=${pageSize}`, {
    withCredentials: true
  })
    .then(response => {
      return response.data
    })
    // the same shorter
    // .then(response => response.data)
}

export const getUserInfo = (userId: string) => {
  return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => response.data)
}