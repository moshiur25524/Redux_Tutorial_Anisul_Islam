const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_COUNTER_BY_VALUE = 'INCREMENT_COUNTER_BY_VALUE'
const Add_USER = 'Add_USER'

const initialState = {
    users: ['moshiur'],
    count: 1
}


// action

const incrementCounter = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrementCounter = () => {
    return {
        type: 'DECREMENT'
    }
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_COUNTER_BY_VALUE,
        payload: value
    }
}

const addUser = (user) => {
    return {
        type: Add_USER,
        payload: user
    }
}

// Create Reducer

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case INCREMENT_COUNTER_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }


        default:
            state;
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_USER:
            return {
                users: [...state.users , action.payload],
                count: state.count + 1
            }

        default:
         return  state;
    }
}

// const store = createStore(counterReducer)
const store = createStore(userReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounterByValue(6))
// store.dispatch(incrementCounterByValue(10))
store.dispatch(addUser('sayma'))
store.dispatch(addUser('tazrin'))