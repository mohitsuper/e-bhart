import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Nopage from "./pages/nopage/Nopage";
import Productinfo from "./pages/productinfo/Productinfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AllProduct from "./pages/allproduct/AllProduct";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import { Card } from "./pages/card/card";
import UserDashbord from "./pages/user/UserDashbord";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddproductPage from "./pages/admin/AddproductPage";
import MyState from './context/myState.jsx'
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./ProductsRoute/ProtectedRouteForUser.jsx";
import { ProtectedRouteForAdmin } from "./ProductsRoute/ProtectedRouteForAdmin.jsx";
import UpdateProductPage from "./pages/admin/UpdateProductPage.jsx";

function App() {

  return (
      <MyState>
        <Router>
          <ScrollTop/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/*' element={<Nopage/>}/>   
            <Route path={`/productinfo/:id`} element={<Productinfo/>} />
            <Route path='/allproduct' element={<AllProduct/>}/>
            <Route path='/card/:id' element={<Card/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashbord/>
            </ProtectedRouteForUser>
          } />



          <Route path="/admin-dashboard" element={
          <ProtectedRouteForAdmin>
            <AdminDashboard />
          </ProtectedRouteForAdmin>
        } />


         <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddproductPage />
            </ProtectedRouteForAdmin>
          } />

          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />


          </Routes>

          <Toaster />
          </Router>
      </MyState>
  )
}

export default App
