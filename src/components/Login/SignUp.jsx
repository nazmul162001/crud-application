import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Swal from 'sweetalert2'
import Spinner from '../Shared/Spinner'

const SignUp = () => {
  const [err, setErr] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const navigate = useNavigate()
  if (loading) {
    return <Spinner />
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const Email = e.target.email.value
    const Password = e.target.password.value
    const confirmPassword = e.target.confirmPassword.value

    if (Password !== confirmPassword) {
      setErr('Password do not match')
    } else if (Password.length < 5) {
      setErr('Password must be at least 5 characters')
    } else {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Sign Up Successfully! Please Login',
        showConfirmButton: false,
        timer: 1500,
      })
      createUserWithEmailAndPassword(Email, Password, confirmPassword)
      navigate('/login')
    }
  }

  //   handling error
  if (error) {
    setErr(error.message)
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
            <div className='password_toggler relative'>
              <input
                type={passwordShown ? 'text' : 'password'}
                placeholder='password'
                className='input input-bordered w-full'
                name='password'
                required
              />
              <span
                onClick={() => setPasswordShown(!passwordShown)}
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
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Confirm Password</span>
            </label>
            <div className='password_toggler relative'>
              <input
                type={passwordShown ? 'text' : 'password'}
                placeholder='Confirm password'
                className='input input-bordered w-full'
                name='confirmPassword'
                required
              />
              <span
                onClick={() => setPasswordShown(!passwordShown)}
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
          <p className='text-red-500'>
            <small>{err}</small>
          </p>
          <div className='form-control mt-6'>
            <button className='bg-yellow-500 py-2 rounded text-white'>
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
