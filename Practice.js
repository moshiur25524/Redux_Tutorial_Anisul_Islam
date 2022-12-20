const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialCounterState = {
    count: 0
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

const addUser = () => {
    return {
        type: 'Add_USER',
        payload: { name: 'moshiur Rahman' }
    }
}

// Create Reducer

const counterReducer = (state = initialCounterState, action) => {
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

        default:
            state;
    }
}

const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())