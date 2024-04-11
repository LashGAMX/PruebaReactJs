import React from 'react'
import '../assets/css/Menu.css'
import datos from '../assets/img/datos-generales.svg'
import plan from '../assets/img/plandetrabajo.svg'
import { PropiedadProyecto } from '../components/PropiedadProyecto'
import { BuscarProyecto } from '../components/BuscarProyecto'
import { Adicional } from '../components/Adicional'
import { Etapas } from '../components/Etapas'

export const Menu = () => {
  return (
    <>
        <div className='container'>
            <div class="tab">
                <button class="tablinks active" onclick="openCity(event, 'London')"><img src={datos} alt="" width="20" /> DATOS</button>
                <button class="tablinks" onclick="openCity(event, 'Paris')"><img src={plan} alt="" width="20" /> PLAN</button>
            </div>
            <br/>
            <div className="row">
                <div className="col-6">
                    <PropiedadProyecto />
                </div>
                <div className="col-6">
                    <BuscarProyecto/>
                </div>
                <div className="col-12">
                    <br/>
                    <Adicional/>
                </div>
                <div className="col-12">
                    <br/>
                    <Etapas/>
                </div>
            </div>

        </div>
    </>
  )
}
