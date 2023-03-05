import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Error from './pages/Error'
import Home from './pages/Home'
import JobDetail, { loader as jobDetailLoader } from './pages/JobDetail'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="job/:id" element={<JobDetail />} loader={jobDetailLoader} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
