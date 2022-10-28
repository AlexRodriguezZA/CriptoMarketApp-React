import React from 'react'
import "./Styles/Header.css"
import wave from "../assets/wave.svg"

const Header = () => {
  return (
<div>
  <div className='header-container'>
    <h1 className='header-titulo'>
      Cripto Market
    </h1>
    <h6 className='header-subtitulo'>
      Data <span className='header-subtitulo-span'>cripto</span>  al instante!
    </h6>
    
  </div>
  <img className='img-wave'  src={wave} alt="" />
</div>
  
  
    
  )
}

export default Header