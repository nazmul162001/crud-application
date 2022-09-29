import React, { useState } from 'react'
import { signOut } from 'firebase/auth';
import 'remixicon/fonts/remixicon.css'
import { NavLink, Outlet } from 'react-router-dom'
import './Dashboard.css'
import logo from '../../assets/images/profile1.png'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  // handle logout user 
  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Successfully Logout'
        )
        signOut(auth)
      }
    })
  }
  
  const [open, setOpen] = useState(true)
  const Menus = [
    {
      title: 'Home',
      src: 'ri-dashboard-line',
      path: '/home',
    },
    {
      title: 'Course',
      src: 'ri-user-line',
      path: '/Course',
    },
    {
      title: 'Students',
      src: 'ri-user-line',
      path: '/addStudent',
    },
    {
      title: 'Payment',
      src: 'ri-user-line',
      path: '/payment',
    },
    {
      title: 'Report',
      src: 'ri-user-line',
      path: '/report',
    },
    {
      title: 'Settings',
      src: 'ri-user-line',
      path: '/settings',
    },
  ]

  return (
    <div className='relative'>
      <input id='' type='checkbox' className='drawer-toggle' />
      <div
        className={`flex flex-col items-center justify-center transition-all ease-in-out duration-300 ${
          open ? 'ml-60' : 'ml-28'
        }`}
      >
        {/* outlet  */}
        <Outlet />
      </div>

      <div className='fixed top-0 h-screen left-0 z-50'>
        <div
          style={{ backgroundColor: '#F2EAE1' }}
          className={` ${
            open ? 'w-56' : 'w-24 '
          } h-screen pt-3 relative duration-300`}
        >
          <i
            className={`bg-base-100 text-black flex justify-center items-center ri-arrow-left-s-line absolute cursor-pointer -right-4 top-8 w-8 h-8
           border-2 rounded-full text-2xl ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          ></i>
          <div className='profile'>
            {open && (
              <h2 className='relative text-center text-sm font-bold mb-3'>
                {' '}
                <span className='bg-yellow-400 w-1 h-6 top-1/2 bottom-1/2 my-auto inline-block absolute left-8'></span>{' '}
                CRUD OPERATIONS
              </h2>
            )}
            <div className='flex items-center justify-center rounded-full'>
              <img
                src={logo}
                alt=''
                className={`cursor-pointer duration-500 rounded-full p-3 ${
                  open && 'rotate-[360deg]'
                }`}
              />
            </div>
            {open && (
              <div className='user_info'>
                <h2 className='text-center font-bold'>Karthi Madesh</h2>
                <p className='text-center text-red-500'>Admin</p>
              </div>
            )}
          </div>
          {/* menu start  */}
          <ul className='pt-6 mx-3'>
            {Menus.map((Menu, index) => (
              <li
                className={`flex justify-center items-center rounded-md cursor-pointer text-sm gap-x-4`}
              >
                {/* for mobile device */}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `active-link flex items-center ${
                          open
                            ? 'py-1 my-1 px-5'
                            : 'flex justify-center items-center'
                        }`
                      : `linkk flex items-center ${
                          open
                            ? 'py-1 my-1 px-5'
                            : 'flex justify-center items-center'
                        }`
                  }
                  to={`${Menu.path}`}
                >
                  {open ? (
                    <i className={`mr-2 text-xl ${Menu.src}`}></i>
                  ) : (
                    <i
                      className={`p-2 text-xl my-2 ${Menu.src}`}
                      data-tip={Menu.tooltip}
                    ></i>
                  )}

                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    {/* menu  */}
                    <NavLink className='block' to={`${Menu.path}`}>
                      {Menu.title}
                    </NavLink>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={handleLogOut} className='absolute bottom-2 py-2 px-5 w-full'>Logout</button>
        </div>
        {/* <div className='h-screen flex-1 p-7'>
            <h1 className='text-2xl font-semibold '>Home Page </h1>
          </div> */}
      </div>
    </div>
  )
}

export default Dashboard
