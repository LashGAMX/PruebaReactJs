import React from 'react'
import agregar from '..//assets/img/agregar.svg'
import '../assets/css/Etapas.css'
import { ModalNuevaEtapa } from './ModalNuevaEtapa'
import { TablaEtapas } from './TablaEtapas'

export const Etapas = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
        <div className="row">
          <div className="col-12">
          <button className='btnEtapa'  onClick={handleClickOpen}><img src={agregar} alt="agregar" width="20" /> Agregar Etapa</button>
          </div>
            <div className="col-12">
             <ModalNuevaEtapa open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
            </div>
            <div className="col-12">
              <br />
              <TablaEtapas open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
              <br/>
            </div>
        </div>
    </>
  )
}
