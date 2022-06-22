import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../types";
import axios from "axios";
export const fetchRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
export const fetchSuccess=(user:any)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}
export const fetchFailure=(error:any)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetch=()=>{
    return async (dispatch:any)=>{
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>{
                const user=res.data
                dispatch(fetchSuccess(user))
            })
            .catch(error=>{
                const errorMsg=error.message
                dispatch(fetchFailure(errorMsg))
            })
    }
}