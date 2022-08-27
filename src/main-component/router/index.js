import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import ErrorPage from '../ErrorPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import BlogPage from '../BlogPage'
import BlogDetails from '../BlogDetails'
import Restaurant from '../Restaurant'

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:id' element={<BlogDetails />} />
          <Route path='restaurant' element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
