import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Landing from './components/Landing'
import { Home } from './components/Home'
import { Dashboard } from './components/Dashboard'
import { Analitics } from './components/Analitics'
import { Admin } from './components/Admin'
import { useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {

const [user, setUser] = useState(null)

const login = ()=>{
  setUser({name: 'John Doe', email: 'johndoe@example.com'})

}

const logout = ()=>{
  setUser(null)
}

  return (
    <BrowserRouter>
    <Navigation />

    {
      user ? (
        <button onClick={logout}>Logout</button>
      ): (
        <button onClick={login}>Login</button>
      )
    }

      <Routes>
        <Route path='/landing' element={<Landing />}/>
        <Route path='/home' element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/analitics' element={<Analitics />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export const Navigation = ()=> {
  return (
    <nav>
      <ul>
        <li><Link to='/landing'>landing</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/dashboard'>dashboard</Link></li>
        <li><Link to='/analitics'>analitics</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
      </ul>

    </nav>
  )


}
