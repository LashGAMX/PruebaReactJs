import React from 'react'

const administrador = [
    {id:1 , name: "Luis Santiago", img: "../assets/img/perfil.png"},
    {id:2 , name: "Israel Ayala", img: "../assets/img/perfil.png"},
    {id:3 , name: "Adrian Laurel", img: "../assets/img/perfil.png"},
]

export const Adicional = () => {
  return (
    <>
        <div className="row">
            <div className="col-4">
                <label htmlFor="responsable" className='form-label'>Responsable del proyecto</label>
                <input type="text" className="form-control form-control-sm" id='responsable' placeholder='Agregar Responsable del proyecto...'/>
            </div>
            <div className="col-4">
                <label htmlFor="administrador" className='form-label'>Administrador</label>
                <select className='form-control' id="administrador">
                    <option value="">Agregar Administrador</option>
                        {administrador.map(item => (
                            <option key={item.id} value=""><img src={item.img} alt={item.img} width="5px" />{item.name}</option>
                        ))}
                    </select>
            </div>
            <div className="col-4">
                <label htmlFor="involucrados" className='form-label'>Involucrados <i>(opcional)</i></label>
                <input type="text" className="form-control form-control-sm" id='involucrados' placeholder='Agregar Involucrado...'/>
            </div>
        </div>
    </>
  )
}
