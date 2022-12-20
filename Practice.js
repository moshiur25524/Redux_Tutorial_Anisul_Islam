

const initialCounterState = {
    count: 0
}

const initalUsersState = { users: [{ user: 'moshiur Rahman' }] }
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