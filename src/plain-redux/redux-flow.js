import { createStore } from 'redux'

const INCREMENT = "INCREMENT";

function countIncrement(value = 1) {
    return {
        type : INCREMENT,
        payload : value
    }
}

const initialState = {
    count : 0,
    user : 0
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + action.payload
            }
    }
}

const store = createStore(userReducer);

store.dispatch(countIncrement)

console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('update state', store.getState())
})

store.dispatch(countIncrement())
store.dispatch(countIncrement(2))

unsubscribe();


