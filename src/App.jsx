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
      {path: '/dashboard/cart', element: <PrivateRoute><Cart></Cart></PrivateRoute>}
    ]}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
