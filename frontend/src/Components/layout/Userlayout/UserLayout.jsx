import React from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'
import { Outlet } from 'react-router-dom'
import Hero from './Hero'
import Home from '../../../Pages/Home'

export default function UserLayout() {
  return (
    <>
        <Header/>
        <main>
        <Outlet/>          
        </main>
        <Footer/>
    </>
)
}
