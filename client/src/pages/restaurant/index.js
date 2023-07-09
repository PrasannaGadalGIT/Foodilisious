import React from 'react'
import BasicMenu from '@/component/menue'
import NavigationBar from '@/component/Navbar'
import styles from '@/styles/navbar.module.css'
import { useRouter } from 'next/router'
import Drawer from '@/component/restaurantNav'

const Restaurant = () => {
  const router = useRouter()
  return (
    <div>
     
      
      <Drawer/>
      <div >   <BasicMenu/></div>
    
      
    
      
    </div>
  )
}
export default Restaurant
