import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home/Home'
import Menu from './pages/Menu/Menu'
import Contact from './pages/Contact/Contact'
import Signin from './pages/features/Signin/Signin'
import Signup from './pages/features/Signup/Signup'
import DashboardLayout from './layout/DashboardLayout'
import Cart from './pages/Dashboard/User/Cart/Cart'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import AddItem from './pages/Dashboard/Admin/AddItem/AddItem'
import ManageItems from './pages/Dashboard/Admin/ManageItems/ManageItems'
import UpdateItems from './pages/Dashboard/Admin/UpdateItems/UpdateItems'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/menu', element: <Menu></Menu>},
      {path: '/contact', element: <Contact></Contact>},
      {path: '/signin', element: <Signin></Signin>},
      {path: '/signup', element: <Signup></Signup>}
    ]},
    {path: '/dashboard', element: <DashboardLayout></DashboardLayout>, children: [
      // admin related routes
      {path: '/dashboard/addItems', element: <PrivateRoute><AddItem></AddItem></PrivateRoute>},
      {path: '/dashboard/manageItems', element: <PrivateRoute><ManageItems></ManageItems></PrivateRoute>},
      {path: '/dashboard/updateItems/:id', element: <PrivateRoute><UpdateItems></UpdateItems></PrivateRoute>, loader: ({params}) => fetch(`http://localhost:5000/dishes/${params.id}`)},

      // user related routes
      {path: '/dashboard/cart', element: <PrivateRoute><Cart></Cart></PrivateRoute>}
    ]}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
