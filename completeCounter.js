const {createStore} = require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET ='RESET'

// state - count : 0
// action - increment , decrement , reset
// reducer 
// store 

const initialState = { count: 0 };

const IncrementCounter = () =>{
    return {
        type: INCREMENT
    }
}
const DecrementCounter = () =>{
    return {
        type: DECREMENT
    }
}
const ResetCounter = () =>{
    return {
        type: RESET
    }
}

const counterReducer = (state = initialState, action) =>{
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
        case RESET:
            return {
                ...state,
                count: state.count = 0
            }
    
        default:
            state;
    }
}

const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(IncrementCounter())
store.dispatch(IncrementCounter())
store.dispatch(DecrementCounter())
store.dispatch(ResetCounter())