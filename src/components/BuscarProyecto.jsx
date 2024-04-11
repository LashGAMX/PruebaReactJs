import React from 'react'

export const BuscarProyecto = () => {
  return (
    <>
    <div className="container" style={{backgroundColor:"#eef5fd"}}>
        <div className="row">
            <div className="col-7">
             <label htmlFor="idPro" className='form-label'>ID Proyecto</label>
                <input type="text" className="form-control form-control-sm" id='idPro' placeholder='Escribe el número de ID Proyectos Sipres'/>
            </div>
            <div className="col-5">
                <br/>
                <button className='btnBorde bg-color4'>Prioridad de proyecto</button>
            </div>
            <div className="col-12">
                <label htmlFor="nombrePro" className='form-label'>Nombre del proyecto</label>
                <input type="text" className="form-control form-control-sm" id='nombrePro' placeholder='Nombre del proyecto...'/>
            </div>
            <div className="col-12">
                <label htmlFor="descripcionPro" className='form-label'>Descripción del proyecto</label>
                <input type="text" className="form-control form-control-sm" id='descripcionPro' placeholder='Descripción del proyecto...'/>
            </div>
            <div className="col-6">
                <label htmlFor="fechaCreacion" className='form-label'>Fecah de creación</label>
                <input type="date" className="form-control form-control-sm" id='fechaCreacion'/>
            </div>
            <div className="col-3">
                <label htmlFor="Capex" className='form-label'>Capex</label>
                <input type="text" className="form-control form-control-sm" id='Capex' placeholder='Capex'/>
            </div>
            <div className="col-3">
                <label htmlFor="Opex" className='form-label'>Opex</label>
                <input type="text" className="form-control form-control-sm" id='Opex' placeholder='Opex'/>
            </div>
            <div className="col-6">
                <div className="border-bottom">
                    <br />
                    <p>Pilar de proyecto</p>
                    <br />
                </div>
            </div>
            <div className="col-6">
                <div className="border-bottom">
                    <br />
                    <p>Clasificación Comité de Inversión</p>
                    <br />
                </div>
            </div>
        </div>
    </div>
</>
  )
}
