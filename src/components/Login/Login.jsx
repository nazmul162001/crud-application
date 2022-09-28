import React from 'react'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const Email = e.target.email.value
        const Password = e.target.password.value
        console.log(Email, Password)
    }
    
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(71.17deg, #FEAF00 19.35%, #F8D442 90.12%)',
      }}
      className='login h-screen flex justify-center items-center'
    >
      <div className='login_form w-96 mx-auto px-8 py-8 bg-base-100 rounded-lg'>
        <h2 className='relative text-center text-2xl font-bold'>
          {' '}
          <span className='bg-yellow-400 w-1 h-6 top-1/2 bottom-1/2 my-auto inline-block absolute left-8'></span>{' '}
          CRUD OPERATIONS
        </h2>
        <p className='text-center font-bold mt-5'>SIGN IN</p>
        <div className='credentials flex justify-between border border-gray-300 px-3 py-2'>
          <p>
            {' '}
            <span className='font-bold'>Email:</span> abc@gmail.com
          </p>
          <p>
            {' '}
            <span className='font-bold'>Pass:</span> 112233
          </p>
        </div>
        {/* input form  */}
        <form onSubmit={handleLogin}>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='email'
              className='input input-bordered'
              name='email'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered'
              name='password'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='bg-yellow-500 py-2 rounded text-base-100'>SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
