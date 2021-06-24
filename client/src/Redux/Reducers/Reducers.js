import { createStore } from 'redux';
const initialState = {
    page:2,
    sdog:[],
    dogs:[],
    temp:[],
    Adddogs:[],
    dogsnext:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'AddTodo':{
            return {...state,
            dogs:action.payload}
        }
        case 'Adddogs':{
            return {...state,
                Adddogs:action.payload}
        }
        case 'searchdog':{
            return {...state,
                sdog:action.payload}
        }
        case 'AddTodonext':{
            return {...state,
            dogsnext:action.payload}
        }
        case 'Tempe':{
            return {...state,
            temp:action.payload}
        }
        case 'NextPage':{
            if(state.dogs.length){
            return {...state,
                dogs:[],
            page:state.page+1}}
            else{return {...state,
                dogs:[],
            page:state.page-1}}
        }
        case 'PreviusPage':{
            if (state.page!=1){
            return {...state,
                dogs:[],
            page:state.page-1}}
            else{return {...state}}
        }
        default: return state;
    }
}

const store = createStore(rootReducer)


export default store;
