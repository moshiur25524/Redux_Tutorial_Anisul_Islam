const { createStore } = require('redux')

const increment = 'INCREMENT'
const decrement = 'DECREMENT'

// State

const InitialCounterState = { count: 0 }

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
const CounterReducer = (state = InitialCounterState, action) => {
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
            state;
    }
}

// Create Store

const store = createStore(CounterReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())


// In this Tutorial we learn:

// 1. Declare {State}
// 2. Dispatch {Action}
// 3. {Reducer} will work upto type of action
// 4. And finally {Store} - getState(), dispatch(), subscribe()

// After Second Class we learn:

// Reducer: Reducer is a pure function which receive two input input parameter and work with the
// given action type and do something.

// After Third Class we learn:

/*
1. first require createStore from redux
2. create a store named store variable
3. then subscribe the store to the view using store.subscribe()
4. dispatch store for action using store.dispatch(incrementCounter())
*/