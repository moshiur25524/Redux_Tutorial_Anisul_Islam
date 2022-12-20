const { createStore } = require('redux')

const increment = 'INCREMENT'
const decrement = 'DECREMENT'
const reset = 'RESET'
const INCREMENT_COUNTER_BY_VALUE = 'INCREMENT_COUNTER_BY_VALUE'

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

const resetCounter = () =>{
    return {
        type: reset
    }
}

const incrementCounterByValue = (value) =>{
    return {
        type: INCREMENT_COUNTER_BY_VALUE,
        payload: value
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

        case decrement:
            return {
                ...state,
                count: state.count - 1
            }

        case reset:
            return {
                ... state,
                count: 0
            }
        case INCREMENT_COUNTER_BY_VALUE:
            return {
                ... state,
                count: state.count + action.payload
            }

        default:
            state;
    }
}

// Create Store

const store = createStore(CounterReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch for action

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(6))


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

// After the Fourth class we learn: 

/*
1. We Revice the whole fundamental redux
2. Let's Write again what we have to do for redux
 # state - count : 0
 # action - increment, decrement, reset
 # reducer - const counterReducer = (state, action) =>{switch() case increment: default}
 # store - getState(), subscribe(), dispatch()
    * For Store we have several steps-
    i) require createStore()
    ii) In a store variable = createStore(counterReducer)
    iii) store.subscribe(()=>{console.log(store.getState())})
    iv) store.dispatch(incrementCounter()) / store.dispatch(decrementCounter()) / store.dispatch(resetCounter())
*/

// After the Fifth Class we learn:

/*
1. how to use payload in the action
2. how to show payload data in the view
3. More example is done by adding a user with payload
*/