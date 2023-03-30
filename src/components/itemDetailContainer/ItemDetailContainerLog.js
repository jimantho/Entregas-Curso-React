import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';

import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"


const ItemDetailContainerLog = () => {

    const [item, setItem] = useState([]);
    const { id} = useParams();



    useEffect(() => {
        const itemCollection = collection(db, "products")
        const ref = doc(itemCollection, id)

        getDoc(ref)
        .then(res => {  
            setItem({
                id: res.id,
                ...res.data()
            })
        })


// sin conectar a la bd de Firebase solo es a nivel json
        // const itemSeleccionado = productos.find(elemento => elemento.name === name)

        // const itemsPromesa = new Promise((resolve, reject) => {
        //     setTimeout(() => { resolve(itemSeleccionado) }, 200)
        // });
        // itemsPromesa
        //     .then((res) => { setItem(res) })
        //     .catch((err) => { console.log(err) })
    }, [id])


    // console.log(productos);
    // console.log(name);
    // console.log(productos.find(elemento => elemento.name === "blusa-pink").name)
    /*  console.log(item)
     console.log(item) */


    return (
        <div>
            <ItemDetailContainer key={item.name} elemento={item}></ItemDetailContainer>
        </div>
    )
}

export default ItemDetailContainerLog

