const { createStore, applyMiddleware } = require('redux')
const { default: logger } = require('redux-logger')

const GET_USER = 'GET_USER'
const ADD_USER = 'ADD_USER'

const initailUserState = {
    users: ['moshiur'],
    count: 1
}

const getUser = () => {
    return {
        type: GET_USER
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state = initailUserState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state
            }

        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }


        default:
            return state;
    }
}

const store = createStore(userReducer, applyMiddleware(logger))
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getUser())
store.dispatch(addUser('Ferdous'))

// From this Eigth class we learn: 

/*
 1. To use MiddleWare ,firstly we have to  require ApplyMiddleware
 2. then install redux logger typing {npm i --save redux-logger}
 3. set ApplyMiddleware in the createStore() with reducer
 4. set logger middleware in the ApplyMiddlware
 5. After then when we will compile we can see the action, previous state , timing etc.
*/