import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import agregar from '../assets/img/agregar.svg'
import info from '../assets/img/informacion.svg'
import '../assets/css/ModalNuevaEtapa.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export const ModalNuevaEtapa = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  

    return (
      <React.Fragment>
        <button className='btnEtapa'  onClick={handleClickOpen}><img src={agregar} alt="agregar" width="20" /> Agregar Etapa</button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className="row">
            <div className="col-12 border-bottom">
                <DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title" >
                <p style={{fontSize:"15px"}}><strong>Agregar etapa</strong></p>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="col-12">
            <DialogContent >
            <div className="row">
                <div className="col-12">
                    <label htmlFor="">Titulo de la iniciativa <i className="text-danger">*</i></label>
                    <input type="text" style={{width:"550px"}} className='form-control form-control-sm' />
                </div>
                <div className="col-12">
                    <label htmlFor="">Descripción de la etapa <i className="text-danger">*</i></label>
                    <div class="form-floating">
                        <textarea class="form-control" style={{width:"550px"}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea" >Descripcion de la etapa</label>
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="">Entregable de la etapa: <img src={info} className='img-fluid' style={{width:"3%"}} alt='info'/></label>
                    <input type="text" style={{width:"550px"}} className='form-control form-control-sm' />
                </div>
                <div className="col-12">
                    <label htmlFor="fechaIni" className='form-label'>Fecha Inicio <i className="text-danger">* </i><img src={info} className='img-fluid' style={{width:"3%"}} alt='info'/></label>
                    <input type="date" style={{width:"550px"}} className="form-control form-control-sm" id='fechaIni' />
                </div>
                <div className="col-12">
                    <label htmlFor="fechaFin" className='form-label'>Fecha Fin <i className="text-danger">* </i><img src={info} className='img-fluid' style={{width:"3%"}} alt='info'/></label>
                    <input type="date" style={{width:"550px"}} className="form-control form-control-sm" id='fechaFin'/>
                </div>
                <div className="col-6">
                    <br />
                    <button className='btn-96 color3'><center>Cancelar</center></button>
                </div>
                <div className="col-6">
                    <br />
                    <button className='btn-96 bg-color4' style={{float:"right",border:"none"}}><center>Agregar</center></button>
                </div>

            </div>
          </DialogContent>
            </div>
          </div>
        
          
        </BootstrapDialog>
      </React.Fragment>
  )
}
