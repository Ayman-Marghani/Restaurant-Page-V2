import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Route>
    )
  )
  
  return <RouterProvider router={router}/>
}

export default App