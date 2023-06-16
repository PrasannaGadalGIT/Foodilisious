import '@/styles/globals.css'
import {Provider} from "react-redux";
import {persistor, store} from "../redux/reducer/store";
import { PersistGate } from 'redux-persist/integration/react'
export default function App({ Component, pageProps }) {
  //provider makes available to redux store to any nested components that need
  //to access the redux store
  return(
    <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps}/>
      </PersistGate>
    </Provider>
  ) 
}
