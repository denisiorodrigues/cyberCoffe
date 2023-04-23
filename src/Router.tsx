import { Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
        <Route path='Success' element={<Success/>}/>
      </Route>
    </Routes>
  )
}