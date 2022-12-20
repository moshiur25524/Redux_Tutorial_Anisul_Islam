const increment = 'INCREMENT'
const decrement = 'DECREMENT'

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

// Create Reducer for Counter
const CounterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1
            }
        // 
        case decrement:
            return {
                ...state,
                count: state.count - 1
            }
        // 


        default:
            state
    }
}


// In this Tutorial we learn:

// 1. Declare {State}
// 2. Dispatch {Action}
// 3. {Reducer} will work upto type of action
// 4. And finally {Store}

// After Second Class we learn:

// Reducer: Reducer is a pure function which receive two input input parameter and work with the
// given action type and do something.