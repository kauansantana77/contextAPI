import React , { createContext, useReducer } from "react";
import user from '../data/User'


const initalState = { user }
const UserContext = createContext({})

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            user: [...state.user, user],
        }
    },

    deleteUser(state, action) {
        const user = action.payload
            return {
                ...state,
                user: state.user.filter(u => u.id !== user.id)
            }
    },

    updateUser(state, action) {
        const updated = action.payload
        return {
            ...state,
            user: state.user.map(u => u.id === updated.id ? updated : u)
        }
    }
}

export const UserProvider = props => {

    function reducer(state, action) {
            const fn = actions[action.type]
            return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <UserContext.Provider value={{
            state, dispatch
        }}>
         {props.children}
        </UserContext.Provider>
    )
}
export default UserContext