
import React, { useEffect, useState } from 'react'
import { icons } from '../../Data/icons';
import { MostrarCategoria } from '../mostrarCategoria/MostrarCategoria';
import { Link, useParams } from "react-router-dom";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import styles from '../homeContainer/HomeContainer.module.css'

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const Categorias = () => {

  const [categorias, setCategorias] = useState([])
  const { categoryName } = useParams();



  useEffect(() => {
    const itemCollection = collection(db, "icons")
    if (categoryName) {
      const q = query(itemCollection, where("tipo", "==",categoryName))
      getDocs(q)
      .then((res) =>{
        const icons = res.docs.map(icon =>{
          return{
            ...icon.data(),
            id: icon.id
          }

        })
        setCategorias(icons)
      })
      .catch((err) => console.log(err))
    }else{
      
      getDocs(itemCollection)
      .then((res) =>{
        const icons = res.docs.map(icon =>{
          return{
            ...icon.data(),
            id: icon.id
          }

        })
        setCategorias(icons)
      })
      .catch((err) => console.log(err))

    }

    // const categoriaFiltrado = icons.filter(icon => icon.tipo === categoryName);
    // const categoriaMujer = icons.filter(icon => icon.tipo === "mujer");

    // const categoriaPromesa = new Promise((resolve, reject) => {
    //   setTimeout(() => { resolve(categoryName ? categoriaFiltrado : categoriaMujer) }, 500)
    // });
    // categoriaPromesa
    //   .then((res) => { setCategorias(res) })
    //   .catch((err) => { console.log(err) })

  }, [categoryName]);


  // console.log(categoryName);


  /* const [post, setPost] = useState([]);
  const [error, setError] = useState([]);

  const crearPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2",
      {
        method: 'PUT',
        body: JSON.stringify({
          userId: 2,
          title: "SE UTILIZAR UN /2 PARA PUT SI O SI",
          body: "aca poner una descripcion"
        }),
        headers: {
          "Content-Type": "application/json",
          //"authoriazation" :
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  useEffect(() => {
    const getPost = fetch("https://jsonplaceholder.typicode.com/posts")
    getPost.then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => setError(err))
  }, [])

  console.log(post) */

  return (
    <>
      {/* <button onClick={crearPost}>Crear Post</button> */}

      <div className={styles.contenedorCategoria}>
        <div className={styles.opcionCategoria}>
          <div className={styles.sexoMujer}>
            <Link to="/">
              <div className="sexo-mujer">
                PARA ELLAS
              </div>
            </Link>
          </div>
          <div className={styles.sexoHombre}>
            <Link to="/Category/hombre">
              <div className="sexo-hombre">
                PARA ELLOS
              </div>
            </Link>
          </div>

        </div>
      </div>
      <div className={styles.contenedorBtnCat} >
        {categorias.map((elemento => { return (<MostrarCategoria key={elemento.nombre} elemento={elemento}></MostrarCategoria>) }))}
      </div>
      <ItemListContainer></ItemListContainer>
      {/* <button onClick={()=>crearPost("hola")}> Crear post</button> se hace con un callback cuando se requiere pasar un parametro */}


    </>

  )
}

export default Categorias
