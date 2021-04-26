const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}

// const initialState = {
//     'noOfCakes': 10,
//     'noOfIceCreams': 20
// }

const initialCakeState = {
    'noOfCakes': 10
}

const initialIceCreamState = {
    'noOfIceCreams': 20
}

// const reducer = (state=initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: {
//             return {
//                 ...state,
//                 noOfCakes: state.noOfCakes - 1
//             }
//         }
//         case BUY_ICE_CREAM: {
//             return {
//                 ...state,
//                 noOfIceCream: state.noOfIceCreams - 1
//             }
//         }
//         default: return state
//     }
// }

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            }
        }
        default: return state
    }
}

const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: {
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
