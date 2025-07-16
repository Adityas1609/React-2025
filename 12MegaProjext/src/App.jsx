import React, { use } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login ,logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  // This is the main application component
  // You can add your routes and components here
  // For now, it just displays a simple message

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() =>{
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)
      )
  },[])
 
  return !loading ? (
    <div className='bg-gray-300 min-h-screen'>
      <Header />
      <h1>loading</h1>
      <Footer/>
    </div>
  ) : null
 
}

export default App