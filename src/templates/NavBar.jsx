import React from 'react'
import '../assets/css/NavBar.css'
import perfil from '../assets/img/perfil.png'
import menu from '../assets/img/hamburguesa.svg'
import home from '../assets/img/home.svg'

export const NavBar = () => {
  return (
    <>
    <ul>
        <li><a className="active text-dark " href="#menu"><img src={menu} width="20" /></a></li>
        <li><a href="#home"><img src={home} width="20" /></a></li>
        <li style={{float:"right",margin:"5px"}}><div className='circular--portrait '><img src={perfil} /></div></li>
    </ul>
    </>
  )
}
