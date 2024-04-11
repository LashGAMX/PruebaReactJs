import React from 'react'
import agregar from '..//assets/img/agregar.svg'
import '../assets/css/Etapas.css'
import { ModalNuevaEtapa } from './ModalNuevaEtapa'
import { TablaEtapas } from './TablaEtapas'

export const Etapas = () => {
  return (
    <>
        <div className="row">
            <div className="col-12">
             <ModalNuevaEtapa />
            </div>
            <div className="col-12">
              <br />
              <TablaEtapas/>
              <br/>
            </div>
        </div>
    </>
  )
}
