import React from 'react'
import agregar from '..//assets/img/agregar.svg'
import '../assets/css/Etapas.css'

export const Etapas = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <button className='btnEtapa'><img src={agregar} alt="agregar" width="20" /> Agregar Etapa</button>
            </div>
        </div>
    </>
  )
}
