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
  },
  follow(userId: string) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: string) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: string) {
    console.warn("You use an old method")
    return profileApi.getProfile(userId)
  },
}

export const profileApi = {
  getProfile(userId: string) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put('profile/status/', {status: status} )
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe = false, isAuth: boolean) {
    return instance.post('auth/login', {email, password, rememberMe, isAuth})
  },
  logout() {
    return instance.delete('auth/login')
  }
}