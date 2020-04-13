import React, { createContext, useReducer } from 'react'

const ProfileContext = createContext()

const SETBG = 'SETBG'
const SETINFO = 'SETINFO'
const POPUP = 'POPUP'

const createAction = dispatch => ({
  setBG: value => dispatch({
    type: SETBG,
    payload: value
  }),
  setInfo: value => dispatch({
    type: SETINFO,
    payload: value
  }),
  popup: value => dispatch ({
    type: POPUP,
    payload: value
  })
})

const reducer = (state, action) => {
  switch (action.type) {
    case SETBG: {
      return (
        {
          ...state,
          bg: action.payload,
          // popup: false
        }
      )
    }
    case SETINFO: {
      return {
        ...state,
        name: action.payload.name,
        title: action.payload.title,
        fbUser: action.payload.fbUser,
        // popup: false
      }
    }
    case POPUP: {
      return {
        ...state,
        popup: !state.popup
      } 
    }
    default: return state
  }
}

const ProfileProvider = props => {
  const localData = localStorage.liveScreenData && JSON.parse(localStorage.getItem('liveScreenData'))

  const init = localData ? localData : {
    name: 'Sofiqul Islam',
    title: 'Web Developer',
    fbUser: 'SChoolWab',
    popup: false,
    bg: 'https://i.ibb.co/qx5Dq6y/bg-image-blur.jpg'
  }
  
  const [state, dispatch] = useReducer(reducer, init)
  const actions = createAction(dispatch)
  return (
    <ProfileContext.Provider value={{state, ...actions}}>
      {props.children}
    </ProfileContext.Provider>
  )
}

export { ProfileProvider, ProfileContext }