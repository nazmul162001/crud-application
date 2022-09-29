import { Route, Routes } from 'react-router-dom'  
import Course from './components/Dashboard/Course'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Dashboard/Home'
import Payment from './components/Dashboard/Payment'
import Report from './components/Dashboard/Report'
import Settings from './components/Dashboard/Settings'
import Students from './components/Dashboard/Students'
import Login from './components/Login/Login'
import RequireAuth from './components/Login/RequireAuth'
import SignUp from './components/Login/SignUp'
import NotFound from './components/NotFound/NotFound'
// import app from './firebase.init'
// import {getAuth} from 'firebase/auth'
// const auth = getAuth(app)

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path='/' element={<Home />}></Route>
          <Route path='/course' element={<Course />}></Route>
          <Route path='/students' element={<Students />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/report' element={<Report />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
