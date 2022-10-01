import axios from 'axios'
import React from 'react'

const UpdateModal = ({
  setUpdate,
  students,
  updatedValue,
  studentsData,
  handleUpdateStudent,
}) => {
  const { _id } = updatedValue

  const handleAddUpdate = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const enroll = e.target.enroll.value
    const admission = e.target.admission.value

    // console.log(name, email, phone, enroll, admission)

    axios.put(
      `https://boiling-springs-92812.herokuapp.com/api/v1/users/${_id}`,
      {
        name: name,
        email: email,
        phone: phone,
        enroll: enroll,
        admission: admission,
      }
    )

    // close modal after successfully added student
    setUpdate(false)
  }

  return (
    <div>
      <input type='checkbox' id='UpdateModal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='UpdateModal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h1 className='text-xl font-bold mb-5'>Update Student</h1>
          <form onSubmit={handleAddUpdate} class='w-full'>
            {/* name field  */}
            <div class='md:flex md:items-center mb-6'>
              <div class='md:w-1/3'>
                <label
                  class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Name:
                </label>
              </div>
              <div class='md:w-2/3'>
                <input
                  class=' outline-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border-gray-300'
                  id='userName'
                  type='text'
                  name='name'
                  defaultValue={updatedValue.name}
                  required
                />
              </div>
            </div>
            {/* email field  */}
            <div class='md:flex md:items-center mb-6'>
              <div class='md:w-1/3'>
                <label
                  class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Email:
                </label>
              </div>
              <div class='md:w-2/3'>
                <input
                  class=' outline-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border-gray-300'
                  id='userEmail'
                  type='email'
                  name='email'
                  defaultValue={updatedValue.email}
                  required
                />
              </div>
            </div>
            {/* phone number field  */}
            <div class='md:flex md:items-center mb-6'>
              <div class='md:w-1/3'>
                <label
                  class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Phone:
                </label>
              </div>
              <div class='md:w-2/3'>
                <input
                  class=' outline-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border-gray-300'
                  id='number'
                  type='number'
                  name='phone'
                  defaultValue={updatedValue.phone}
                  required
                />
              </div>
            </div>
            {/* Enroll number field  */}
            <div class='md:flex md:items-center mb-6'>
              <div class='md:w-1/3'>
                <label
                  class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Enroll Number:
                </label>
              </div>
              <div class='md:w-2/3'>
                <input
                  class=' outline-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border-gray-300'
                  id='number'
                  type='number'
                  name='enroll'
                  defaultValue={updatedValue.enroll}
                  required
                />
              </div>
            </div>
            {/* date of admission field  */}
            <div class='md:flex md:items-center mb-6'>
              <div class='md:w-1/3'>
                <label
                  class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Date of Admission:
                </label>
              </div>
              <div class='md:w-2/3'>
                <input
                  class=' outline-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:border-gray-300'
                  id='admission'
                  type='date'
                  name='admission'
                  defaultValue={updatedValue.admission}
                  required
                />
              </div>
            </div>
            {/* submit button  */}
            <div class=''>
              <div class='md:w-1/3'></div>
              <div class='md:w-2/3'>
                <div className='modal-action'>
                  <button className='px-12 py-2 bg-yellow-500 rounded-lg text-base-100'>
                    Submit
                  </button>
                  {/* <input type="submit" value="submit" /> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal
