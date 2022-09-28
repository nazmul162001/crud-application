import { Route, Routes } from 'react-router-dom'
import AddStudent from './components/Dashboard/AddStudent'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Dashboard/Home'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addStudent' element={<AddStudent />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
