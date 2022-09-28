import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { NavLink, Outlet } from 'react-router-dom'
import './Dashboard.css'
import logo from '../../assets/images/logo.png'

const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    {
      title: 'Home',
      src: 'ri-dashboard-line',
      path: '/',
    },
    {
      title: 'Add Student',
      src: 'ri-user-line',
      path: '/addStudent',
    },
  ]

  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* outlet  */}
        <Outlet />
      </div>

      <div className=''>
        <label htmlFor='' className=''></label>
        <div className='flex'>
          <div
            className={` ${
              open ? 'w-52' : 'w-24 '
            } bg-gray-300 h-screen p-5  pt-8 relative duration-300`}
          >
            <i
              className={`bg-base-100 text-black flex justify-center items-center ri-arrow-left-s-line absolute cursor-pointer -right-3 top-9 w-8 h-8
           border-2 rounded-full text-2xl ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            ></i>
            <div className='flex gap-x-4 items-center justify-center'>
              <img
                src={logo}
                alt=''
                className={`cursor-pointer duration-500 ${
                  open && 'rotate-[360deg]'
                }`}
              />
            </div>
            <ul className='pt-6'>
              {Menus.map((Menu, index) => (
                <li
                  className={`flex rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4
${Menu.gap ? '' : ''} ${index === 0 && 'bg-light-white'} `}
                >
                  {/* for mobile devicea */}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `active-link flex items-center ${
                            open && 'py-3 my-1 px-5'
                          }`
                        : `linkk flex items-center ${open && 'py-3 my-1 px-5'}`
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
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200`}
                    >
                      <NavLink className='block' to={`${Menu.path}`}>
                        {Menu.title}
                      </NavLink>
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='h-screen flex-1 p-7'>
            <h1 className='text-2xl font-semibold '>Home Page </h1>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
