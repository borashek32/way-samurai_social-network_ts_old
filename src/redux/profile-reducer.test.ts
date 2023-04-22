import React from 'react';
import {addPostAC, ProfilePageType, profileReducer, removePostAC} from "./profile-reducer";


let state: ProfilePageType

beforeEach(() => {
  state = {
    title: 'ProfilePage',
    descForNewPost: '',
    status: 'newStatus',
    posts: [
      {id: '1', userId: 27310, isPublished: true, desc: 'hi', likes: 12},
      {id: '2', userId: 27310, isPublished: true, desc: 'hi nataly', likes: 9},
      {id: '3', userId: 27310, isPublished: true, desc: 'hello', likes: 5},
      {id: '4', userId: 27310, isPublished: true, desc: 'hoc', likes: 13},
      {id: '5', userId: 27310, isPublished: true, desc: 'bye', likes: 1},
    ],
    profile: {
      aboutMe: '',
      lookingForAJob: true,
      lookingForAJobDescription: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
      },
      followed: true,
      uniqueUrlName: '',
      fullName: '',
      userId: null,
      photos: {
        small: '',
        large: '',
      }
    }
  }
})

test('new post should be added', () => {
  const newState = profileReducer(state, addPostAC('it-kamasutra.com'))

  expect(newState.posts.length).toBe(6)
  expect(newState.posts[5].desc).toBe('it-kamasutra.com')
  expect(newState.posts[5].likes).toBe(0)
})

test('length of posts should be decremented after deleting a post', () => {
  const newState = profileReducer(state, removePostAC('1'))

  expect(newState.posts.length).toBe(4)
})

test('length of posts shouldn\'t be decremented after getting a wrong id', () => {
  const newState = profileReducer(state, removePostAC('890'))

  expect(newState.posts.length).toBe(5)
})