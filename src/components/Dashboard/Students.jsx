import React, { useEffect, useState } from 'react'
import arrow from '../../assets/images/arrow.png'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import AddUpdateModal from './AddUpdateModal'
import axios from 'axios';
import Spinner from '../Shared/Spinner';
import Student from './Student';

const Students = () => {
    const [students, setStudents] = useState(false)
    const [studentsData, setStudentsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

      // getting student data from server
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users')
      .then((res) => setStudentsData(res.data));
  }, [studentsData]);

  if(isLoading){
    return <Spinner />
  }
  // console.log(studentsData);


    
  return (
    <section className='manage_student mt-5'>
      <div className='add_student flex justify-between'>
        <h2 className='text-3xl font-bold'>Student List</h2>
        <div className='add flex justify-center items-center'>
          <span className='mr-5'>
            <img src={arrow} alt='/arrow' />
          </span>
          <label onClick={()=> setStudents(true)} htmlFor="addUpdateModal" className="px-5 py-2 cursor-pointer bg-yellow-500 rounded-lg text-base-100">ADD NEW STUDENT</label>
        </div>
      </div>
      {/* students table  */}
      {/* <Table>
        <Thead className='border'>
          <Tr className='text-left'>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Enroll Number</Th>
            <Th>Date of admission</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className='border'>
            <Td>Nazmul Hassan</Td>
            <Td>developer.nazmul@gmail.com</Td>
            <Td>+8801790-868092</Td>
            <Td>24641564</Td>
            <Td>9 April 2019</Td>
            <Td>
                <span>DE</span>
                <span>Up</span>
            </Td>
          </Tr>
        </Tbody>
      </Table> */}
      <div className='overflow-x-auto mt-5'>
        <table className='table table-compact w-full'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              studentsData.map((students) => <Student students = {students} key={students._id} />)
            }
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of admission</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {students && <AddUpdateModal />}
    </section>
  )
}

export default Students
