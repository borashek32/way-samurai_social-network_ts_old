import axios from "axios";
import {ApiUserProfileType} from "../redux/profile-reducer";

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
  follow(userId: number | null) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId: number | null) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number | null) {
    console.warn("You use an old method")
    return profileApi.getProfile(userId)
  },
  getUsersForDialogs() {
    return instance.get(`users`)
      .then(response => {
        return response.data
      })
  }
}

export const profileApi = {
  getProfile(userId: number | null) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number | null) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put('profile/status/', {status: status} )
  },
  savePhoto(photo: File) {
    let formData = new FormData()
    formData.append("image", photo)
    return instance.put('profile/photo', formData, {
      headers: {
      'Content-Type': 'multipart/form-data'
    }})
  },
  saveProfileData(formData: ApiUserProfileType) {
    return instance.put(`profile/`, formData)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null, isAuth: boolean) {
    return instance.post('auth/login', {email, password, rememberMe, captcha, isAuth})
  },
  logout() {
    return instance.delete('auth/login')
  }
}

export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}