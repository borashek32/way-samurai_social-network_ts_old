import React from "react";
import {rerenderEntireTree} from "./render";
import {store} from "./redux/redux-store";

store.subscribe(rerenderEntireTree)
rerenderEntireTree()





































// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//   switch (action.type) {
//     case 'TRACK-STATUS-CHANGED':
//       return {
//         ...state,
//         status: action.status
//       }
//     default:
//       return state
//   }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//   status: 'Stopped',
//   currentPlayPosition: 1213,
//   trackUrl: 'https://blabla.com/track01.mp3',
//   volume: 100
// }
//
// const newState = playerReducer(state, {type: 'TRACK-STATUS-CHANGED', status: 'Paused'})
// console.log(newState.status === 'Paused')
//
// //Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true









// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type TodoType = {
//   id: string;
//   title: string;
//   order: 0;
//   createdAt: string;
//   updatedAt: string;
//   completed: boolean;
// }
//
//
// // Api
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const todosAPI = {
//   getTodos() {
//     return instance.get<TodoType[]>('todos')
//   },
// }
//
//
// // App
// const App = () => {
//
//   const [todos, setTodos] = useState<TodoType[]>([])
//
//   useEffect(() => {
//     todosAPI.getTodos().then((res) => setTodos(res.data))
//   }, [])
//
//   return (
//     <>
//       <h2>✅ Список тудулистов</h2>
//       {
//         todos.map((t) => {
//           return (
//             <div style={t.completed ? {color: 'grey'} : {}} key={t.id}>
//               <input type="checkbox" checked={t.completed}/>
//               <b>Описание</b>: {t.title}
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// 📜 Описание:
// При написании типизации по невнимательности было допущено несколько ошибок.
// Напишите через пробел правильные свойства в TodoType, в которых была допущена ошибка.
// Debugger / network / документация вам в помощь

// 🖥 Пример ответа: id status isDone




// import {createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector, useDispatch} from 'react-redux'
// import React from 'react'
//
// const students = {
//   students: [
//     {id: 1, name: 'Bob'},
//     {id: 2, name: 'Alex'},
//     {id: 3, name: 'Donald'},
//     {id: 4, name: 'Ann'},
//   ]
// }
// type RemoveStudentAT = {
//   type: "REMOVE-STUDENT"
//   id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//   type: "REMOVE-STUDENT",
//   id
// })
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//   switch (action.type) {
//     case "REMOVE-STUDENT":
//       return {
//         ...state,
//         students: state.students.filter(s => s.id !== action.id)
//       }
//   }
//   return state
// }
//
// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//   const listItemStyles = {
//     width: "100px",
//     borderBottom: "1px solid gray",
//     cursor: "pointer",
//   }
//   const students = useSelector((state: RootStateType) => state.students)
//   const dispatch = useDispatch()
//   const studentsList = students.map(s => {
//     const removeStudent = () => {
//       dispatch(RemoveStudentAC(s.id))
//     }
//     return (
//       <li key={s.id}
//           style={listItemStyles}
//           onClick={removeStudent}>
//         {s.name}
//       </li>)
//   })
//   return (
//     <ol>
//       {studentsList}
//     </ol>
//
//   )
// }
//
//
// ReactDOM.render(<div>
//     <Provider store={store}>
//       <StudentList/>
//     </Provider>
//   </div>,
//   document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// удалялся из списка? Напишите через пробел.





// import React from 'react'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'
//
// type StudentType = {
//   id: number
//   name: string
//   age: number
// }
//
// const initState = {
//   students:
//     [
//       {id: 1, name: 'Bob', age: 23},
//       {id: 2, name: 'Alex', age: 22}
//     ] as Array<StudentType>
// }
// type AddStudentAT = {
//   type: 'ADD-STUDENT'
//   name: string
//   age: number
//   id: number
// }
//
// type InitialStateType = typeof initState
//
// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//   switch (action.type) {
//     case 'ADD-STUDENT':
//       return {
//         ...state,
//         students: [...state.students, {
//           name: action.name,
//           age: action.age,
//           id: action.id
//         }]
//       }
//   }
//   return state
// }
//
// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
// const StudentList = () => {
//   const students = useSelector((state: RootStateType) => state.students)
//   return (
//     <ul>
//       {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//     </ul>
//   )
// }
// const App = () => {
//   return <StudentList/>
// }
//
// ReactDOM.render(<div>
//     <Provider store={appStore}>
//       <App/>
//     </Provider>
//   </div>,
//   document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?



// import React, {useState, useReducer, useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// const changeCounter = (state: number, action: any): number => {
//   switch (action.type) {
//     case "INC_VALUE":
//       return state + 1
//     case "RESET":
//       return 0
//     case "DEC_VALUE":
//       return state - 1
//     default:
//       return state
//   }
// }
//
// function Counter() {
//   const [value, setValue] = useReducer(changeCounter, 0)
//   const [isCounter, setIsCounter] = useState(true)
//   const commonStyles: React.CSSProperties = {
//     border: "1px solid black",
//     margin: "100px auto",
//     width: "300px",
//     height: "150px",
//     textAlign: "center",
//   }
//   const btnStyles: React.CSSProperties = {
//     color: "white",
//     fontWeight: "bold",
//     backgroundColor: "darkgray",
//     borderRadius: "3px",
//     minWidth: "40px"
//   }
//
//   return (
//     <div style={commonStyles}>{
//       isCounter
//         ? <div >
//           <div style={{marginBottom: "20px"}}>
//             <h2>{value}</h2>
//             <button
//               style={{...btnStyles, backgroundColor: "red"}}
//               onClick={() => setIsCounter(false)}>OFF</button>
//           </div>
//           <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//           <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//           <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//         </div>
//         : <div style={{textAlign: "center"}}>
//           <h2>Counter not working</h2>
//           <button
//             style={{...btnStyles, backgroundColor: "green"}}
//             onClick={() => setIsCounter(true)}>ON</button>
//         </div>
//     }
//     </div>
//   )
// }
//
//
// ReactDOM.render(
//   <Counter/>, document.getElementById('root')
// );
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.





// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'USER-NAME-UPDATED':
//       return {...state, user: {name: action.name}}
//
//     default:
//       return state
//   }
// }
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
// const state = {
//   count: 10,
//   user: {
//     name: 'Dimych',
//     age: 18,
//     isMarried: true,
//     status: "offline"
//   },
//   books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?








// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//   id: number
//   title: string
//   forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//   {id: 1, title: 'delete', forAdminOnly: true},
//   {id: 2, title: 'update', forAdminOnly: true},
//   {id: 3, title: 'create', forAdminOnly: false},
// ]
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//   const [seconds, setSeconds] = useState(0)
//
//   const increaseSeconds = () => setSeconds(seconds + 10)
//
//   const correctButtons = useCallback(() => {
//     return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//   }, [isAdmin])
//
//   return <>
//     <ButtonsPanel buttons={correctButtons}/>
//     <div>
//       <p>
//         <b>Секунды: {seconds}</b>
//       </p>
//       <button onClick={increaseSeconds}>
//         Увеличить на 10 секунд
//       </button>
//     </div>
//   </>
// }
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//   console.log('Render ButtonsPanel')
//   return (
//     <div style={{marginBottom: '15px'}}>
//       <div style={{marginBottom: '15px'}}>
//         <b>Панель с кнопками</b>
//       </div>
//       <div>
//         {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//       </div>
//     </div>
//   )
// })
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))

// Что нужно написать вместо XXX и YYY,
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// при нажатии на кнопку "Увеличить на 10 секунд" ?

// Ответ дайте через пробел: 111 222







// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//   const [temp, setTemp] = useState(100)
//   const [seconds, setSeconds] = useState(0)
//
//   const resetTemp = useCallback(() => setTemp(0), [])
//
//   const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])
//
//   // const resetTemp = useCallback(() => setTemp(0), [])
// //
// //   const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])
// //
// //   // const incSec = () => setSeconds(seconds + 1)
// //
//
//   return <>
//     <TempDisplay temp={temp} resetTemp={resetTemp}/>
//     <SecDisplay seconds={seconds} incSec={incSec}/>
//   </>
// }
// const TempDisplay = React.memo((props: any) => {
//   console.log('Render TempDisplay')
//   return (
//     <div style={{marginBottom: '10px'}} onClick={props.reset}>
//       <p>
//         <b>Температура: </b>{props.temp} &#176;
//       </p>
//       <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//     </div>
//   )
// })
//
// const SecDisplay = React.memo((props: any) => {
//   console.log('Render SecDisplay')
//   return (
//     <div>
//       <p><b>Секунды:</b> {props.seconds} c </p>
//       <button style={{marginRight: '20px'}}
//               onClick={props.incSec}>
//         Увеличить время на 1 секунду
//       </button>
//     </div>
//   )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'))

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1)




// import {combineReducers, createStore} from 'redux'
// import ReactDOM from 'react-dom'
// import {Provider, useSelector} from 'react-redux'
// import React from 'react'
//
// let initialState = {items:
//     [
//       {id: 1, name: 'Dimych'},
//       {id: 2, name: 'Ignat'}
//     ]
// }
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//   return state
// }
//
// let rootReducer = combineReducers({
//   users: usersReducer,
//   auth: authReducer
// })
//
// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>
//
// const selector = (state: RootStateType) => state.users.items
//
// const Users = () => {
//
//   const users = useSelector(selector)
//
//   return <ul>
//     {users.map(u => <li key={u.id}>{u.name}</li>)}
//   </ul>
// }
//
// ReactDOM.render(<div>
//     <Provider store={store}>
//       <Users/>
//     </Provider>
//   </div>,
//   document.getElementById('root')
// )

// Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// ❗ Ответ дать минимально возможным объёмом кода





// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// const store = createStore(combineReducers({
//   users: usersReducer
// }))
//
// store.subscribe(() => {
//   console.log('state changed')
// })
//
// store.dispatch({type: 'ANY'})

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?





// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'TRACK-DELETED':
//       return state.filter((track: any) => track.id !== action.trackId)
//     default:
//       return state
//   }
// }
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//   {id: 12, likesCount: 10},
//   {id: 14, likesCount: 2},
//   {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)


// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?







// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//   switch (action.type) {
//     case 'TRACK-VOLUME-CHANGED':
//       return {
//         ...state,
//         volume: action.volumeLevel
//       }
//     default:
//       return state
//   }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//   status: 'Stopped',
//   currentPlayPosition: 1213,
//   trackUrl: 'https://blabla.com/track01.mp3',
//   volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.




// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'USER-NAME-UPDATED':
//       return {...state, user: {name: action.name}}
//
//     default:
//       return state
//   }
// }
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
// const state = {
//   count: 10,
//   user: {
//     name: 'Dimych',
//     age: 18,
//     isMarried: true,
//     status: "offline"
//   },
//   books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

//Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?




// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'TRACK-DELETED':
//       return state.filter((track: any) => track.id !== action.trackId)
//     default:
//       return state
//   }
// }
//
// const deleteTrackAC =(trackId: number) =>({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//   {id: 12, likesCount: 10},
//   {id: 14, likesCount: 2},
//   {id: 100, likesCount: 0}
// ]
//
// const newState = reducer(state, deleteTrackAC(14))
// console.log(newState.length === 2)

// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?




// export const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case 'TRACK-ADDED':
//       return {
//         ...state,
//         [action.trackId]: {
//           id: action.trackId, likesCount: 0
//         }
//       }
//     default:
//       return state
//   }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
// const state = {
//   12: {id: 12, likesCount: 10},
//   14: {id: 14, likesCount: 2},
//   100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, xxx)
// console.log(newState[300].likesCount === 0)

// Что нужно написать вместо XXX, чтобы в консоли увидеть true?




// import {combineReducers, createStore} from 'redux'
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
// const usersReducer = (state = initialState, action: any) => {
//   return state
// }
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
// const authReducer = (state = authInitialState, action: any) => {
//   return state
// }
//
// const store = createStore(combineReducers({
//   users: usersReducer,
//   XXX
// }))
//
// store.subscribe(() => {
//   const login = store.getState().auth.login
//   console.log(login)
// })
//
// store.dispatch({type: 'ANY'})
// export default store;

// Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?




// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//   id: number
//   title: string
//   forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//   {id: 1, title: 'delete', forAdminOnly: true},
//   {id: 2, title: 'update', forAdminOnly: true},
//   {id: 3, title: 'create', forAdminOnly: false},
// ]
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//   const [seconds, setSeconds] = useState(0)
//
//   const increaseSeconds = () => setSeconds(seconds + 10)
//
//   // const correctButtons = XXX(() => {
//   //   return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//   // }, [YYY])
//
//   const correctButtons = useCallback(() => {
//     return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//   }, [buttons])
//
//   return <>
//     <ButtonsPanel buttons={correctButtons}/>
//     <div>
//       <p>
//         <b>Секунды: {seconds}</b>
//       </p>
//       <button onClick={increaseSeconds}>
//         Увеличить на 10 секунд
//       </button>
//     </div>
//   </>
// }
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//   console.log('Render ButtonsPanel')
//   return (
//     <div style={{marginBottom: '15px'}}>
//       <div style={{marginBottom: '15px'}}>
//         <b>Панель с кнопками</b>
//       </div>
//       <div>
//         {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//       </div>
//     </div>
//   )
// })
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))

// Что нужно написать вместо XXX и YYY,
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// при нажатии на кнопку "Увеличить на 10 секунд" ?

// Ответ дайте через пробел: 111 222




// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//   const [temp, setTemp] = useState(10)
//   const [seconds, setSeconds] = useState(100)
//
//   const increaseSeconds = () => setSeconds(seconds + 10)
//   const increaseTemp = useCallback(() => setTemp(temp + 1), [temp])
//
//   return <>
//     <TempDisplay temp={temp} increaseTemp={increaseTemp}/>
//
//     <div>
//       <b>Секунды :</b> {seconds} с
//       <button style={{marginLeft: '15px'}}
//               onClick={increaseSeconds}>
//         Увеличить на 10 секунд
//       </button>
//     </div>
//   </>
// }
// const TempDisplay = React.memo((props: any) => {
//   console.log('Render TempDisplay')
//   return (
//     <div style={{marginBottom: '15px'}}
//          onClick={props.reset}>
//       <b>Температура:</b> {props.temp} &#176;
//       <button style={{marginLeft: '15px'}}
//               onClick={props.increaseTemp}>
//         Увеличить температуру на 1 градус
//       </button>
//     </div>
//   )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'));

// Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"

// Пример ответа: useEffect(() => setCounter(count + 1), [count])




// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//   const [temp, setTemp] = useState(100)
//   const [seconds, setSeconds] = useState(0)
//
//
//   const resetTemp = useCallback(() => setTemp(0), [])
//
//   const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])
//
//   // const incSec = () => setSeconds(seconds + 1)
//
//   return <>
//     <TempDisplay temp={temp} resetTemp={resetTemp}/>
//     <SecDisplay seconds={seconds} incSec={incSec}/>
//   </>
// }
// const TempDisplay = React.memo((props: any) => {
//   console.log('Render TempDisplay')
//   return (
//     <div style={{marginBottom: '10px'}} onClick={props.reset}>
//       <p>
//         <b>Температура: </b>{props.temp} &#176;
//       </p>
//       <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//     </div>
//   )
// })
//
// const SecDisplay = React.memo((props: any) => {
//   console.log('Render SecDisplay')
//   return (
//     <div>
//       <p><b>Секунды:</b> {props.seconds} c </p>
//       <button style={{marginRight: '20px'}}
//               onClick={props.incSec}>
//         Увеличить время на 1 секунду
//       </button>
//     </div>
//   )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'))

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1)

// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const TempManager = () => {
//   const [temp, setTemp] = useState(0)
//   const [seconds, setSeconds] = useState(0)
//
//   const resetTemp = useCallback(() => setTemp(0), [])
//   const increaseSeconds = () => setSeconds(seconds + 100)
//   // const increaseSeconds = useCallback(() => setSeconds(seconds + 100), [setSeconds])
//
//   console.log('Render seconds')
//
//   return (
//     <>
//       <TempDisplay temp={temp} reset={resetTemp}/>
//       <div>
//         <p><b>Секунды:</b> {seconds} с</p>
//         <button onClick={increaseSeconds}>
//           Увеличить время на 100 секунд
//         </button>
//       </div>
//     </>
//   )
// }
//
// const TempDisplay = React.memo((props: any) => {
//   console.log('Render TempDisplay')
//   return (
//     <div>
//       <p><b>Температура</b>: {props.temp} &#176;</p>
//       <button onClick={props.reset}>Reset</button>
//     </div>
//   )
// })
//
// ReactDOM.render(<TempManager/>, document.getElementById('root'))


//При увеличении времени (при клике на button) компонент TempDisplay
//тоже перерисовывается. Эта перерисовка является избыточной.
//Найдите в чем причина лишних перерисовок.
//Исправленную версию строки напишите в качестве ответа.

//Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)



// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//   const style = {
//     color: props.fontColor,
//     backgroundColor: props.bgColor
//   }
//
//   return <button style={style}>
//     {props.title}
//   </button>
// }
//
// export const App = () => {
//   return <div>
//     <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//     <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//   </div>
// }
//
// ReactDOM.render(<App/>,
//   document.getElementById('root')
// )

// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// export const App = () => {
//   const [temp, setTemp] = useState(10)
//   const [seconds, setSeconds] = useState(100)
//
//   const increaseSeconds = () => setSeconds(seconds + 10)
//   const increaseTemp = useCallback(() => setTemp(temp + 1), [temp])
//
//   return <>
//     <TempDisplay temp={temp} increaseTemp={increaseTemp}/>
//
//     <div>
//       <b>Секунды :</b> {seconds} с
//       <button style={{marginLeft: '15px'}}
//               onClick={increaseSeconds}>
//         Увеличить на 10 секунд
//       </button>
//     </div>
//   </>
// }
// const TempDisplay = React.memo((props: any) => {
//   console.log('Render TempDisplay')
//   return (
//     <div style={{marginBottom: '15px'}}
//          onClick={props.reset}>
//       <b>Температура:</b> {props.temp} &#176;
//       <button style={{marginLeft: '15px'}}
//               onClick={props.increaseTemp}>
//         Увеличить температуру на 1 градус
//       </button>
//     </div>
//   )
// })
//
// ReactDOM.render(<App/>, document.getElementById('root'));
//
// // Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// // 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// // 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"
//
// // Пример ответа: useEffect(() => setCounter(count + 1), [count])

// import React, {useCallback, useState} from 'react'
// import ReactDOM from 'react-dom'
//
// type ButtonType = {
//   id: number
//   title: string
//   forAdminOnly: boolean
// }
// const buttons: any = [
//   {id: 1, title: 'delete', forAdminOnly: true},
//   {id: 2, title: 'update', forAdminOnly: true},
//   {id: 3, title: 'create', forAdminOnly: false},
// ]
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//   const [seconds, setSeconds] = useState(0)
//
//   const increaseSeconds = () => setSeconds(seconds + 10)
//
//   const correctButtons = useCallback(() => {
//     return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//   }, [buttons])
//
//   return <>
//     <ButtonsPanel buttons={correctButtons}/>
//     <div>
//       <p>
//         <b>Секунды: {seconds}</b>
//       </p>
//       <button onClick={increaseSeconds}>
//         Увеличить на 10 секунд
//       </button>
//     </div>
//   </>
// }
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//   console.log('Render ButtonsPanel')
//   return (
//     <div style={{marginBottom: '15px'}}>
//       <div style={{marginBottom: '15px'}}>
//         <b>Панель с кнопками</b>
//       </div>
//       <div>
//         {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//       </div>
//     </div>
//   )
// })
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))
//
// // Что нужно написать вместо XXX и YYY,
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// // при нажатии на кнопку "Увеличить на 10 секунд" ?
//
// // Ответ дайте через пробел: 111 222



// import React, {useState} from "react";
//
// type UserType = {
//   id: number
//   name: string
//   status: "online" | "offline"
// }
//
// type AddressType = {
//   country: string
//   city: string
//   email: string
// }
//
// type AdressesType = {
//   [userID: string]: AddressType
// }
//
//
// const users: Array<UserType> = [
//   {id: 1, name: "Bob", status: "online"},
//   {id: 2, name: "Alex", status: "offline"},
//   {id: 3, name: "Ann", status: "offline"},
// ]
//
// export const addresses: AdressesType = {
//   1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//   2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//   3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// export const changeUserStatus = (userID: number, status: string) => {
//   return users.filter(u => u.id === userID ? {...u, status} : u)
// }
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция changeUserStatus, которая меняет статус пользователя.
// Что надо написать вместо ххх, чтобы функция работала корректно?

// import React, {useState} from "react";
//
// type UserType = {
//   id: number
//   name: string
//   status: "online" | "offline"
// }
//
// type AddressType = {
//   country: string
//   city: string
//   email: string
// }
//
// type AdressesType = {
//   [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//   {id: 1, name: "Bob", status: "online"},
//   {id: 2, name: "Alex", status: "offline"},
//   {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//   1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//   2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//   3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//   return {...addresses,
//     [userID]: {...addresses[key], [key]: newValue}
//   }
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?


//  СРЕДА
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//   volume: number // in percents
//   trackUrl: string // 'https://blabla.com/track01.mp3',
//   currentPlayPosition: number // milliseconds,
//   status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//   switch (action.type) {
//     case 'TRACK-STATUS-CHANGED':
//       return {
//         ...state,
//         status: action.status
//       }
//     default:
//       return state
//   }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//   status: 'Stopped',
//   currentPlayPosition: 1213,
//   trackUrl: 'https://blabla.com/track01.mp3',
//   volume: 100
// }
//
// const newState = playerReducer(state, {type: 'TRACK-STATUS-CHANGED', status: 'Paused'})
// console.log(newState.status === 'Paused')

//Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true


