import Image from 'next/image'
import { Inter } from 'next/font/google'

import Login from './login'
import Home from './home'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })


export default function User() {
  const {token} = useSelector(state=> state.user)
  if(!token){
    return (
      <Login/>
    )
  }else{
    return (
      <Home/>
    )
  }
  
}
