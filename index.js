const increment = 'INCREMENT'
const decrement = 'DECREMENT'
const add_user = 'ADD_USER'

// State

const InitialCounterState = { count: 0 }
const InitialUsersState = { users: [{ user: 'Moshiur Rahman' }] }

// action - OBJECT - type, payload

const incrementCounter = () => {
    return {
        type: increment
    }
}

const decrementCounter = () => {
    return {
        type: decrement
    }
}

const addUser = () => {
    return {
        type: add_user,
        payload: { name: 'moshiur Rahman' }
    }
}

// INCREMENT COUNTER
// DECREMENT COUNTER

// In this Tutorial we learn:

// 1. Declare {State}
// 2. Dispatch {Action}
// 3. {Reducer} will work upto type of action
// 4. And finally {Store}