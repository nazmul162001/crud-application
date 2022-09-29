import { Route, Routes } from 'react-router-dom'
import AddStudent from './components/Dashboard/AddStudent'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Dashboard/Home'
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
          <Route path='/home' element={<Home />}></Route>
          <Route path='/addStudent' element={<AddStudent />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
