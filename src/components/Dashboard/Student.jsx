import React, { useState } from 'react'
import UpdateModal from './UpdateModal'

const Student = ({ students, handleDeleteStudentData }) => {
  const [update, setUpdate] = useState(false)
  const { name, email, phone, enroll, admission, _id } = students

  return (
    <>
      <tr className='border-b-2'>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{enroll}</td>
        <td>{admission}</td>
        <td className='flex'>
          <label
            onClick={() => setUpdate(true)}
            htmlFor='UpdateModal'
            className='mr-4 text-xl text-yellow-500 cursor-pointer hover:bg-yellow-600 rounded-full hover:text-base-100 px-2 py-1 flex justify-center items-center'
          >
            <i class='ri-pencil-line'></i>
          </label>

          <i
            onClick={() => handleDeleteStudentData(_id)}
            class='ri-delete-bin-7-line text-xl text-yellow-500 cursor-pointer hover:bg-yellow-600 rounded-full hover:text-base-100 px-2 py-1'
          ></i>
        </td>
      </tr>
      {update && <UpdateModal setUpdate={setUpdate} />}
    </>
  )
}

export default Student
