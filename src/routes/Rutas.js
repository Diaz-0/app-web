import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts";
import { Home,Footer, formEmpleado, AdminEmpleadores } from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Home)}/>
    <Route path='/empleado' element={loadLayouts(Layout, formEmpleado)}/>
    <Route path='/empleador' element={loadLayouts(Layout, AdminEmpleadores)}/>
    <Route path='/formempleador' element={loadLayouts(Layout, FormEmpleadores)}/>
   </Routes> 
  )
}