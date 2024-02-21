import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
export default function Layout({children}) {
  return (
    <div><Outlet/></div>
  )
}
