import React, { useEffect, useState } from 'react'
import hat from '../../assets/images/hat.png'
import course from '../../assets/images/course.png'
import payment from '../../assets/images/payment.png'
import user from '../../assets/images/user.png'
import axios from 'axios'

const Home = () => {
    const [studentsData, setStudentsData] = useState([])
          // getting student data from server
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users')
      .then((res) => setStudentsData(res.data));
  }, [studentsData]);
    
  return (
    <section className='welcome_dashboard mx-3 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        <div className='student_info bg-[#F0F9FF] p-5 rounded-lg'>
          <div className='students'>
            <img src={hat} alt='/hat_image' />
            <p className='opacity-70 my-1'>Students</p>
          </div>
          <div className='count flex justify-end'>
            <span className='text-2xl font-bold'>{studentsData.length}</span>
          </div>
        </div>
        <div className='student_info bg-[#FEF6FB] p-5 rounded-lg'>
          <div className='students'>
            <img src={course} alt='/hat_image' />
            <p className='opacity-70 my-1'>Course</p>
          </div>
          <div className='count flex justify-end'>
            <span className='text-2xl font-bold'>243</span>
          </div>
        </div>
        <div className='student_info bg-[#FEFBEC] p-5 rounded-lg'>
          <div className='students'>
            <img src={payment} alt='/hat_image' />
            <p className='opacity-70 my-1'>Payments</p>
          </div>
          <div className='count flex justify-end'>
            <span className='text-sm font-bold flex items-end'>INR</span>
            <span className='text-2xl font-bold'>556,000</span>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              'linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)',
          }}
          className='student_info p-5 rounded-lg'
        >
          <div className='students'>
            <img src={user} alt='/hat_image' />
            <p className='opacity-70 my-1 text-base-100'>Users</p>
          </div>
          <div className='count flex justify-end'>
            <span className='text-2xl font-bold'>3</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
