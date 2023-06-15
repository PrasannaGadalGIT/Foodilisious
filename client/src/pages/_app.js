import '@/styles/globals.css'
import {Provider} from "react-redux";
import store from "../redux/reducer/store";

export default function App({ Component, pageProps }) {
  //provider makes available to redux store to any nested components that need
  //to access the redux store
  return(
    <Provider store={store}> 
    <Component {...pageProps} />
    </Provider>
  ) 
}
