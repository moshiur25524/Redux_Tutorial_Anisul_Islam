const { createStore, combineReducers } = require('redux')

// User Constants
const GET_USER = 'GET_USER'
const Add_USER = 'Add_USER'

// Friends Constants
const GET_FRIEND = 'GET_FRIEND'
const Add_FRIEND = 'Add_FRIEND'

// 1. User State
const initialUserState = {
    users: ['Moshiur'],
    count: 1
};
// 1. User State
const initialFriendState = {
    friend: ['Nahid , Hafiz'],
    count: 2
};

// 2. User Action
const GetUser = () => {
    return {
        type: GET_USER
    }
}
const AddUser = (user) => {
    return {
        type: Add_USER,
        payload: user
    }
}

// 2. Friends Action
const GetFriend = () => {
    return {
        type: GET_FRIEND
    }
}
const AddFriend = (user) => {
    return {
        type: Add_FRIEND,
        payload: user
    }
}

// 3. User Reducer
const UserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state
            }
        case Add_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            return state;
    }
}
// 3. Friends Reducer
const FriendReducer = (state = initialFriendState, action) => {
    switch (action.type) {
        case GET_FRIEND:
            return {
                ...state
            }
        case Add_FRIEND:
            return {
                friend: [...state.friend, action.payload],
                count: state.count + 1
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userR: UserReducer,
    friendR: FriendReducer
})

// 4. Store
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(GetUser())
store.dispatch(AddUser('Sayma'))

store.dispatch(GetFriend())
store.dispatch(AddFriend('Osman'))
