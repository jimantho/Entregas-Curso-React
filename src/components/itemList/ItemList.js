import React from 'react'
import { Item } from '../item/Item'
import { useEffect, useState } from "react"
import styles from "../ItemListContainer/ItemListContainer.module.css"
import HashLoader from "react-spinners/HashLoader";

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemList = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {

    setIsLoading(true)

    // const itemsPromesa = new Promise((resolve, reject) => {
    //   setTimeout(() => { resolve(productos) }, 200)
    // });

    // itemsPromesa
    //   .then((res) => { setItems(res) })
    //   .catch((err) => { console.log(err) })
   
    const itemCollection  = collection(db,"products")
    getDocs(itemCollection)
    .then((res) => {
      const products = res.docs.map(product => {
        return{
          ...product.data(),
          id: product.id
        }
      }

      )
      // console.log(products)
      setItems(products)
    })
    .catch((err) => console.log(err))
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

  }, []);

  return (
    <div>
      <div className={styles.contenedorCard}>
        {isLoading ? <HashLoader
          color={"#36d7b7"}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> : items.map((elemento) => { return (<Item key={elemento.id} elemento={elemento} />) })}
      </div>

    </div>
  )
}

export default ItemList

