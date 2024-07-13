import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home/Home'
import Menu from './pages/Menu/Menu'
import Contact from './pages/Contact/Contact'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/menu', element: <Menu></Menu>},
      {path: '/contact', element: <Contact></Contact>}
    ]}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
