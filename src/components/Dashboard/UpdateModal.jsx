import React from 'react';

const UpdateModal = ({setUpdate}) => {
    const handleUpdate = () => {
        
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
            <h1 className='text-xl font-bold mb-5'>Add/Edit Students</h1>
            <form onSubmit={handleUpdate} class='w-full'>
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
    );
};

export default UpdateModal;