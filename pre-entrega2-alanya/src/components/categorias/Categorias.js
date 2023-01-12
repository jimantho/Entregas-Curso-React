// import { Css } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { icons } from '../../Data/icons';
import { MostrarCategoria } from '../mostrarCategoria/MostrarCategoria';
import { CategoriasCustom } from './CategoriasCustom';


const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const categoriaPromesa = new Promise((resolve, reject) => {
      setTimeout(() => { resolve(icons) }, 2000)
    });
    categoriaPromesa
      .then((res) => { setCategorias(res) })
      .catch((err) => { console.log(err) })

  }, []);

  const [filtradoHombre, setFiltradoHombre] = useState([]);
  const [filtradoMujer, setFiltradoMujer] = useState([]);

const filtradoHombreee = [];

  const darFiltradoMujer = () => {
    const filtradoMujerr = categorias.filter((elemento) => elemento.tipo === "mujer");
    setFiltradoMujer(filtradoMujerr);



  }
  console.log(filtradoMujer);


  const darFiltradoHombre = () => {
    const filtradoHombree = categorias.filter((elemento) => elemento.tipo === "hombre");
    setFiltradoHombre(filtradoHombree);
    filtradoHombre.map((elemento) => { return (<MostrarCategoria elemento={elemento} />) })


  }
  console.log(filtradoHombre);

  return (
    <>
      <CategoriasCustom mostrarEllas={darFiltradoMujer} mostrarEllos={darFiltradoHombre}></CategoriasCustom>
      <div> Hola MUNDO
        {filtradoMujer.map((elemento) => { return (<MostrarCategoria key={elemento.nombre} elemento={elemento} />) })}
        {filtradoHombre.map((elemento) => { return (<MostrarCategoria key={elemento.nombre} elemento={elemento} />) })}
        {/* {setFiltradoMujer([])} */}

      </div>
    </>

  )
}

export default Categorias