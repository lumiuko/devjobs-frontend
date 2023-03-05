import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import Home from './pages/Home'
import JobDetail, { loader as jobDetailLoader } from './pages/JobDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'job/:id',
        element: <JobDetail />,
        errorElement: <Error />,
        loader: jobDetailLoader
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
