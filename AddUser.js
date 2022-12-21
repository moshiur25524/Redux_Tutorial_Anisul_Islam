const { createStore } = require('redux')

const Add_USER = 'Add_USER'

// 1. State
const initialUserState = {
    users: ['Moshiur'],
    count: 1
};

// 2. Action
const AddUser = (user) => {
    return {
        type: Add_USER,
        payload: user
    }
}

// 3. Reducer
const AddUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case Add_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            state;
    }
}

// 4. Store
const store = createStore(AddUserReducer)
store.subscribe(() => {
    console.log(store.getState());
})

// Store dispatch()
store.dispatch(AddUser('Sayma'))
store.dispatch(AddUser('Tazrin'))
store.dispatch(AddUser('Jan'))