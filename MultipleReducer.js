const { createStore, combineReducers } = require('redux')

// Product Reducer

// products constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

//  Product State
const initialProductState = {
    products: ['Sugar', 'Salt'],
    numberOfProducts: 2
}

// Cart State
const initialCartState = {
    cart: ['Sugar'],
    numberOfProducts: 1
}

// Product Actions
const getProduct = () => {
    return {
        type: GET_PRODUCTS
    }
};
const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
};

// Cart Actions
const getCartItems = () => {
    return {
        type: GET_CART_ITEMS
    }
};
const addCartItem = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
};

// Product Reducer
const ProductReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}

// Cart Reducer
const CartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: ProductReducer,
    cartR: CartReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(getProduct())
store.dispatch(addProduct('Pen'))

store.dispatch(getCartItems())
store.dispatch(addCartItem('Mouse'))

// from the seventh class we learn:

/*
 1. how to make two reducer named {Product Reducer} and {Cart Reducer}
 2. To hold two reducer, we used combineReducer like as 

 const rootReducer = combineReducer({
    ProductR: ProductReducer,
    CartR: CartReducer
 })
 3. And set the rootReducer to the store as Reducer
*/ 
