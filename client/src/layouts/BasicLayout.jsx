import React from 'react'
import { Link, Outlet } from 'react-router'

export default function BasicLayout() {
  return (
  <>
    <header className="bg-blue-400 text-white flex items-center justify-between sticky top-0 p-2 space-x-4">
       <div className="flex items-center space-x-4">
        <Link to={'/'} className="text-3xl">🏠</Link>
        </div>
       <div className="flex gap-3">
       <div className='border-3 px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400'>
       <Link to={'/login'}>sign-in</Link> 
        </div>
       <div className='border-3 px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400'>
       <Link to={'/signup'}>sign-up</Link> 
        </div>
       </div>
    </header>
    <main>
       <Outlet/>
    </main>
  </>
  )
}
