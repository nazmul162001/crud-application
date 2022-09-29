import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Spinner from '../Shared/Spinner'

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  // Redirect location after login successful
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  if (user) {
    navigate(from, { replace: true })
  }
  if (loading) {
    return <Spinner />;
  }

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  // error handling
  let errorMessage
  if (error) {
    errorMessage = (
      <p className='text-red-500 italic text-xl'>
        <small> {error?.message} </small>
      </p>
    )
  }
  // handle login
  const handleLogin = (e) => {
    e.preventDefault()
    const Email = e.target.email.value
    const Password = e.target.password.value

    signInWithEmailAndPassword(Email, Password)
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
            <span className='font-bold'>Email: </span>test@gmail.com
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
            <div className='password_toggler relative'>
              <input
                type={passwordShown ? 'text' : 'password'}
                placeholder='password'
                className='input input-bordered w-full'
                name='password'
                required
              />
              <span
                onClick={togglePassword}
                className='absolute right-5 top-2 text-2xl'
              >
                {passwordShown ? (
                  <i class='ri-eye-line'></i>
                ) : (
                  <i class='ri-eye-off-line'></i>
                )}
              </span>
            </div>
          </div>
          <p>
            <small>{errorMessage}</small>
          </p>
          <div className='form-control mt-6'>
            <button className='bg-yellow-500 py-2 rounded text-base-100'>
              SIGN IN
            </button>
          </div>
          <p>
            New to here?{' '}
            <span onClick={() => navigate('/signUp')} className='link'>
              Sign Up
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
