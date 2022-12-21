// async Acttion - api calling
// api url = https://jsonplaceholder.typicode.com/todos
// middleware = redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// Constants

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// States

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// action

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

// Reducer

const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }

        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            return state;
    }
}

// Async Action Creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios
            .get(API_URL, {
                headers: { "Accept-Encoding": "gzip,deflate,compress" }
            })
            .then((res) => {
                const todos = res.data
                const titles = todos.map(todo => todo.title)
                // console.log(titles.slice(0, 10));
                dispatch(getTodosSuccess(titles))
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(getTodosFailed(errorMessage))
            })
    }
}

// Store

const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())

// In the Ninth class we learn:

// Fetch data using redux-thunk  

/**
  1. Declare a todos initial state with empty array, isLoading, error. and this look like:

        const todosInitialState = {
            todos: [],
            isLoading: false,
            error: null
        }

2. then, created three action to request , success, failed of todos. And It looks:

        const getTodosRequest = () =>{
            return {
                type: 'GET_TODOS_REQUEST'
            }
        }

        // success and failed are same but they have payload with parameter in the function

3. Created a reducer of todos. this also looks like:

        case REQUEST: 
            return {
                ...State,
                isLoading: true
            }
        case SUCCESS / FAILED: 
            same as REQUEST but they have todo and error from the action.payload

4. Crated a store and install axios and redux-thunk
5. set thunk middleware in the store with reducer
6. then We dispatch a function: In the Function ---
7. We Return Another function which carry dispatch parameter and then call the getTodoRequest in the dispatch like: 

        dispatch(getTodosRequest())

8. fetch data using axios. axios give a res. and in the res.data we get the todos. we map the todos to find title. Here an error occured for headers. and the solve is:

         headers: { "Accept-Encoding": "gzip,deflate,compress" }

9. After getting the title, we call the getTodosSuccess. like :

            dispatch(getTodosSuccess(title))

10. axios also show error if Error Occured. and Looks Like:

            dispatch(getTodosFailed(error.message))
 */