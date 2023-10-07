import { useState } from 'react'

import './App.css'
import axios from 'axios'
import Bard from 'bard-ai';
import Nav from './component/Nav';
import Details from './component/Details';
import Edit from './component/Edit';
import Pageedit from './component/Pageedit';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Test from './component/Test';

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/page' element={<Pageedit/>}/>
      <Route path='/test' element={<Test/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
