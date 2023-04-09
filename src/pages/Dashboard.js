import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const loginData = useSelector((ele) => ele.loginUser)
  console.log('loginData', loginData)
  return (
    <>
      <div className="text-center text-4xl">welcome</div>
    </>
  )
}

export default Dashboard
