
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";
import {fetch, fetchRequest} from "../store/actions";
import {useEffect, useState} from "react";
import Loading from "../store/actions/loading";

function MyApp({ Component, pageProps }: AppProps) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetch())
    },[])
    const state = useSelector((state) =>state);
    const loading=state ? state.status : "request";
    return (
        <>
            {
                loading=="request"?<Loading/>: loading==="success"?state.user.map(({id})=>(
                    <div key={id}>
                        <span>{id}</span>
                    </div>
                )):<h1>Error</h1>
            }
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);