import Image from 'next/image'
import { Inter } from 'next/font/google'

import Login from './login'
import Home from './home'
import { useSelector } from 'react-redux'
import Restaurant from './restaurant'

const inter = Inter({ subsets: ['latin'] })



export default function User() {
  const {token, role} = useSelector(state=> state.user)
  if(token && role == 'User'){
    return <Home/>
}else if(token && role == 'Restaurant Owner'){
   return <Restaurant/>
}
else{
return (<Login/>);
} 

  
}
