import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "46b63e5a-3617-4795-b158-8f82fffd20f6"
  }
})

export const usersApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
    // the same shorter
    // .then(response => response.data)
  },
  follow(userId: string) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId: string) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}

export const getUserInfo = (userId: string) => {
  return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response => response.data)
}