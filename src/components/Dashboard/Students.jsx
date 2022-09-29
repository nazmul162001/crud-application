import React from 'react'
import arrow from '../../assets/images/arrow.png'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Students = () => {
  return (
    <section className='manage_student mt-5'>
      <div className='add_student flex justify-between'>
        <h2 className='text-3xl font-bold'>Student List</h2>
        <div className='add flex justify-center items-center'>
          <span className='mr-5'>
            <img src={arrow} alt='/arrow' />
          </span>
          <button className='px-5 py-2 bg-yellow-500 rounded-lg text-base-100'>
            ADD NEW STUDENT
          </button>
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
      <div className="overflow-x-auto">
  <table className="table table-compact w-full">
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
      <tr className='border-b-2'> 
        <td>Nazmul Hassan</td> 
        <td>nazmul@gmail.com</td> 
        <td>+8801790-868092</td> 
        <td>6465646455</td> 
        <td>12/16/2020</td> 
        <td className='flex'>
        <i class="ri-pencil-line mr-4 text-xl text-yellow-500"></i>
        <i class="ri-delete-bin-7-line text-xl text-yellow-500"></i>
        </td>
      </tr>
      <tr className='border-b-2'> 
        <td>Nazmul Hassan</td> 
        <td>nazmul@gmail.com</td> 
        <td>+8801790-868092</td> 
        <td>6465646455</td> 
        <td>12/16/2020</td> 
        <td className='flex'>
        <i class="ri-pencil-line mr-4 text-xl text-yellow-500"></i>
        <i class="ri-delete-bin-7-line text-xl text-yellow-500"></i>
        </td>
      </tr>
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
    </section>
  )
}

export default Students
