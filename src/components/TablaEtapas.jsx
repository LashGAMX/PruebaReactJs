import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import edit  from '../assets/img/editar.svg'
import trash from '../assets/img/delete.svg'

function createData(titulo, descripcion, entregable, fechaIni, fechaFin,opc1,opc2) {
  return { titulo, descripcion, entregable, fechaIni, fechaFin,opc1,opc2 };
}

const row = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,"",""),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,"",""),
  createData('Eclair', 262, 16.0, 24, 6.0,"",""),
  createData('Cupcake', 305, 3.7, 67, 4.3,"",""),
  createData('Gingerbread', 356, 16.0, 49, 3.9,"",""),
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}


export const TablaEtapas = () => {
 
  const [etapas,saveEtapas] = React.useState( useLocalStorage('TODOS_V1', []))


  const deleteEtapas = (text) => {
    const newTodos = [...etapas];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveEtapas(newTodos);
  };
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Titulo</TableCell>
          <TableCell align="right">Descripción</TableCell>
          <TableCell align="right">Entregable</TableCell>
          <TableCell align="right">Fecha Inicio</TableCell>
          <TableCell align="right">Fecha Fin</TableCell>
          <TableCell align="right"><img src={edit} alt="edit" width="15px" /></TableCell>
          <TableCell align="right"><img src={trash} alt="edit" width="15px" /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {etapas.map((row) => (
          <TableRow
            key={row.titulo}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.titulo}
            </TableCell>
            <TableCell align="right">{row.descripcion}</TableCell>
            <TableCell align="right">{row.entregable}</TableCell>
            <TableCell align="right">{row.fechaIni}</TableCell>
            <TableCell align="right">{row.fechaFin}</TableCell>
            <TableCell align="right"><u>Editar</u></TableCell>
            <TableCell align="right"><button onClick={() => deleteEtapas(row.titulo)}><u>Eliminar</u></button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
