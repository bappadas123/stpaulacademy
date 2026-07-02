
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  }
 
]);



  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
