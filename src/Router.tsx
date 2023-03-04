import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { IssueDetails } from './pages/IssueDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="issue/:number" element={<IssueDetails />} />
      </Route>
    </Routes>
  )
}
