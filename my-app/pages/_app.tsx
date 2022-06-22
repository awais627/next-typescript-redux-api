
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";
import {fetch, fetchRequest} from "../store/actions";
import {useEffect} from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetch())
    },[])
    console.log(data)
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);