import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    const Email = e.target.email.value
    const Password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value
    
    createUserWithEmailAndPassword(Email, Password, confirmPassword);
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
        <p className='text-center font-bold mt-5'>SIGN UP</p>
        {/* input form  */}
        <form onSubmit={handleSignUp}>
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
              type='password'
              placeholder='password'
              className='input input-bordered'
              name='password'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='confirm password'
              className='input input-bordered'
              name='confirmPassword'
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='bg-yellow-500 py-2 rounded text-base-100'>
              SIGN UP
            </button>
          </div>
          <p>
            Already have account?{' '}
            <span onClick={() => navigate('/login')} className='link'>
              Sign In
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
