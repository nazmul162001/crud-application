import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import 'remixicon/fonts/remixicon.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './Dashboard.css'
import logo from '../../assets/images/profile1.png'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const location = useLocation()
  const [user, loading, error] = useAuthState(auth)

  // handle logout user
  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
      }
    })
  }

  const [open, setOpen] = useState(true)
  const Menus = [
    {
      title: 'Home',
      src: 'ri-home-8-line',
      path: '/home',
    },
    {
      title: 'Course',
      src: 'ri-award-fill',
      path: '/Course',
    },
    {
      title: 'Students',
      src: 'ri-team-line',
      path: '/students',
    },
    {
      title: 'Payment',
      src: 'ri-money-dollar-box-line',
      path: '/payment',
    },
    {
      title: 'Report',
      src: 'ri-file-chart-line',
      path: '/report',
    },
    {
      title: 'Settings',
      src: 'ri-settings-2-line',
      path: '/settings',
    },
  ]

  return (
    <div className='relative'>
      <input id='' type='checkbox' className='drawer-toggle' />
      <div
        className={`transition-all ease-in-out duration-300 mr-5 ${
          open ? 'ml-60' : 'ml-28'
        }`}
      >
        {/* outlet  */}
        <div className='flex justify-between items-center my-2 mx-5'>
          <div className='left_arrow'>
            <i class='ri-arrow-left-s-fill text-2xl text-gray-400 rotate-180 rounded-full border cursor-pointer'></i>
          </div>
          <div className='search flex justify-center items-center'>
            <div class='font-sans text-black bg-white flex items-center justify-center'>
              <div class='border rounded-lg overflow-hidden flex'>
                <input type='text' class='px-4 py-2' placeholder='Search...' />
                <button class='flex items-center justify-center px-4'>
                  <svg
                    class='h-4 w-4 text-grey-dark'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
                  </svg>
                </button>
              </div>
            </div>
            <i class='ri-notification-3-line ml-2 text-2xl cursor-pointer text-gray-400'></i>
          </div>
        </div>
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
            className={`bg-white text-black flex justify-center items-center ri-arrow-left-s-line absolute cursor-pointer -right-4 top-8 w-8 h-8
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
                    <i className={`mr-2 text-2xl ${Menu.src}`}></i>
                  ) : (
                    <i
                      className={`p-2 text-2xl ${Menu.src}`}
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
          {open ? (
            <button
              onClick={handleLogOut}
              className='absolute bottom-2 py-2 w-1/2 left-0 right-0 mx-auto border border-gray-400'
            >
              Logout <i class='ri-share-forward-2-line'></i>
            </button>
          ) : (
            <button
              onClick={handleLogOut}
              className='absolute bottom-2 py-2 w-1/2 left-0 right-0 mx-auto border border-gray-400'
            >
              <i class='ri-share-forward-2-line'></i>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
