import React from 'react'

const Student = ({students}) => {

    const {name, email, phone, enroll, admission} = students
    
  return (
    <tr className='border-b-2'>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{enroll}</td>
      <td>{admission}</td>
      <td className='flex'>
        <i class='ri-pencil-line mr-4 text-xl text-yellow-500'></i>
        <i class='ri-delete-bin-7-line text-xl text-yellow-500'></i>
      </td>
    </tr>
  )
}

export default Student
