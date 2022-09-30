import React from 'react'

const Student = ({ students, handleDeleteStudentData }) => {
  const { name, email, phone, enroll, admission, _id } = students

  return (
    <tr className='border-b-2'>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{enroll}</td>
      <td>{admission}</td>
      <td className='flex'>
        <i class='ri-pencil-line mr-4 text-xl text-yellow-500 cursor-pointer hover:bg-yellow-600 rounded-full hover:text-base-100 px-2 py-1'></i>
        <i
          onClick={()=> handleDeleteStudentData(_id)}
          class='ri-delete-bin-7-line text-xl text-yellow-500 cursor-pointer hover:bg-yellow-600 rounded-full hover:text-base-100 px-2 py-1'
        ></i>
      </td>
    </tr>
  )
}

export default Student
