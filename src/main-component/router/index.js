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
import RestaurantDetail from '../RestaurantDetail'
import AboutPage from '../AboutPage';
import Profile from '../Profile';
import QRCodePage from '../QRCodePage';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='about' element={<AboutPage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-single/:id' element={<BlogDetails />} />
          <Route path='restaurant' element={<Restaurant />} />
          <Route path='restaurant/:id' element={<RestaurantDetail />} />
          <Route path='profile' element={<Profile />} />
          <Route path='qr-code' element={<QRCodePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
