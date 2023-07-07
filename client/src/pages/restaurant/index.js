import React from 'react'
import BasicMenu from '@/component/menue'
import NavigationBar from '@/component/Navbar'
import styles from '@/styles/navbar.module.css'
import { useRouter } from 'next/router'


const Restaurant = () => {
  const router = useRouter()
  return (
    <div>
      <div className={styles.restaurantNavBar}>
      <div >   <BasicMenu/></div>
      <NavigationBar/>
        </div>
     <div>
      <button className=' bg-black p-3 rounded-3xl text-white' onClick={() => router.push('/add-menue')}>Add menue</button>
      </div> 
      
    
      
    </div>
  )
}
export default Restaurant
