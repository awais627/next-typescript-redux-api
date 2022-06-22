import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../types";

const initialState={
    loading:false,
    user:[],
    error:"",
    status:"request"
}
const reducer=(state=initialState,action:any)=>{
    switch (action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true,
                status:"request"
            }
        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                user:action.payload,
                status:"success",
                error:""
            }
        case FETCH_USER_FAILURE:
            return{
                loading: false,
                user:[],
                status:"error",
                error: action.payload
            }
    }
}
export default reducer