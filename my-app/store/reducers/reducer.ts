import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../types";

const initialState={
    loading:false,
    user:[],
    error:""
}
const reducer=(state=initialState,action:any)=>{
    switch (action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                user:action.payload,
                error:""
            }
        case FETCH_USER_FAILURE:
            return{
                loading: false,
                user:[],
                error: action.error
            }
    }
}
export default reducer