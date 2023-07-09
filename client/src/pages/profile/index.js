import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '@/styles/profile.module.css'

const profile = () =>  {
  const router = useRouter()
  const {id} = useSelector(state => state.user)
  const [userDetails, setUserDetails] = useState({})
  
  const fetchDetails = async() => {
    const res = await fetch("http://localhost:3001/users/" + id)
    const data = await res.json()
    
    setUserDetails(data.userList)
  } 

  useEffect(() => {
    fetchDetails()
  }, []);

  return (
    <div >
      <button onClick={() => router.push('/')}>Back</button>
      <table className={styles.profile}>
        <td>
          <tr>First Name : </tr>
          <tr>Last Name : </tr>
          <tr>Email : </tr>
          
        </td>
        <td>
        <tr>{userDetails.firstName}</tr>
        <tr>{userDetails.lastName}</tr>
        <tr>{userDetails.email}</tr>
        </td>
      </table>
    </div>
  )
}

export default profile
