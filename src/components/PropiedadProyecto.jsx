import React from 'react'
import info from '../assets/img/informacion.svg'

const objetivos = [
    {id: 1, objetivo: "Seleccione un objetivo..."},
    {id: 2, objetivo: "2021 CHGS Garantizar que los datos y estadísticas relacionada....."},
    {id: 3, objetivo: "2021 CHGS Lorem ipsum dolor sit amet."},
    {id: 4, objetivo: "2024 TotalPlat Lorem ipsum dolor sit amet.."},
]

export const PropiedadProyecto = () => {
  return (
    <>
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <label htmlFor="idOrc" className='form-label'>ID Sistema ORC's</label>
                    <input type="text" className="form-control form-control-sm" id='idOrc' value="0" disabled/>
                </div>
                <div className="col-12">
                    <label htmlFor="nombre" className='form-label'>Nombre del proyecto</label>
                    <input type="text" className="form-control form-control-sm" id='nombre' placeholder='Nombre del proyecto...'/>
                </div>
                <div className="col-12">
                    <label htmlFor="descripcion" className='form-label'>Descripción del proyecto</label>
                    <input type="text" className="form-control form-control-sm" id='descripcion' placeholder='Descripción del proyecto...'/>
                </div>
                <div className="col-12">
                    <label htmlFor="objetivos" className='form-label'>Objetivos a los que contribuye el proyecto</label>
                    <select className='form-control' id="objetivos">
                        {objetivos.map(obj => (
                            <option key={objetivos.id} value="">{obj.objetivo}</option>
                        ))}
                    </select>
                </div>
                <div className="col-6">
                    <label htmlFor="fechaIni" className='form-label'>Fecha Inicio <img src={info} className='img-fluid' style={{width:"8%"}} alt='info'/></label>
                    <input type="date" className="form-control form-control-sm" id='fechaIni' />
                </div>
                <div className="col-6">
                    <label htmlFor="fechaFin" className='form-label'>Fecha Fin <img src={info} className='img-fluid' style={{width:"8%"}} alt='info'/></label>
                    <input type="date" className="form-control form-control-sm" id='fechaFin'/>
                </div>
                <div className="col-6">
                    <br/>
                    <button className='btnBorde bg-color4'>Prioridad de proyecto</button>
                </div>
            </div>
        </div>
    </>
  )
}
