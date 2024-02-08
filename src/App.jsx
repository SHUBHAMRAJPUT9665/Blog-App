import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import {login,logout } from './store/authSlice'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "./App.css";
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userdata) => {
      if(userdata){
        dispatch(login({userdata}));
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setloading(false));
  });

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;
