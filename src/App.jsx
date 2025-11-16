import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import CreateAccount from './pages/Account/CreateAccount'
import Login from './pages/Account/Login'
import RequireAuth from './pages/Account/RequireAuth'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardInitial from './pages/Dashboard/DashboardInitial'
import AddProduct from './pages/Dashboard/AddProduct'
import ShowProduct from './pages/Dashboard/ShowProduct'



function App() {


  return (
    <>
         <Routes>
         <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      {/* dashboard start */}
      <Route path="/dashboard" element={<Dashboard />}> 
      <Route index element={<DashboardInitial/>}/>
      <Route path="addProduct" element={<AddProduct />} />
      <Route path="showProduct" element={<ShowProduct />} />
      </Route>
      {/* dashboard end */}
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
