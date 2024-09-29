import { useEffect, useState } from 'react'

let globalstate = []
let listeners = []
let action = {}
export const useStore = () => {
  const setState = useState(globalstate)[1]
  const dispatch = (actionIdentifer, paylod) => {
    const newstate = action[actionIdentifer](globalstate, paylod)
    globalstate = { ...globalstate, ...newstate }
    for (const listener of listeners) {
      listener(globalstate)
    }
  }
  useEffect(() => {
    listeners.push(setState)
    return () => {
      listeners = listeners.filter((li) => li !== setState)
    }
  }, [setState])
  return [globalstate, dispatch]
}

export const initStore = (userAction, initalState) => {
  if (initalState) {
    globalstate = { ...globalstate, ...initalState }
  }
  action = { ...action, ...userAction }
}
