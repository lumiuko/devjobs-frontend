import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import JobDetail from './pages/JobDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="job/:id" element={<JobDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
