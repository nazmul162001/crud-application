import { Route, Routes } from 'react-router-dom'
import AddStudent from './components/Dashboard/AddStudent'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Dashboard/Home'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
// import app from './firebase.init'
// import {getAuth} from 'firebase/auth'
// const auth = getAuth(app)

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addStudent' element={<AddStudent />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>
    </>
  )
}

export default App
