import React, { useState } from 'react'
import {addDoc, collection, doc, updateDoc} from "firebase/firestore"
import  {db} from "../../firebaseConfig"

const Form = ({cart, getTotalPrice, setOrderId, clearCart}) => {
    /*  const [name, setName] = useState("");
     const [lastName, setLastName] = useState(""); */
    const [data, setData] = useState({ name: "", lastName: "", phone: "", mail: "" });
    const total = getTotalPrice();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(`Hola ${data.name} ${data.lastName}  como estas? `);
        // console.log(event.target.elements.name.value);
        // console.log(event.target.elements.lastName.value)
        const order ={
            buyer: data,
            items: cart,
            total:total
        }
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then(res => {setOrderId(res.id)})

        /* const orderDoc = doc(db,"products", 1)
        updateDoc(orderDoc, {stock}) */

        cart.map(product => { updateDoc(doc(db,"products", product.id ), {stock: product.stock - product.quantity})})

    

        clearCart()
    }
    /*  const changeName = (event) => {
         // console.log(event.target.value)
         // setName(event.target.value)
         setData({...data, name: event.target.value })
     } */
    /*     const changeLastName = (event) => {
            console.log(event.target.value)
            setLastName(event.target.value)
    
        } */
    // console.log(data.name, data.lastName)

    const handleKey = (event) => {
        // console.log(event.key)
        if (event.key !== "a" & event.key !== " ") { // no permite escribir letras o espacios de acuerdo a lo que restringes , ESTO SE PUEDE HACER CON LIBRERIAS COMO FORMIK Y YUP 
            console.log(event.key)
        } else {
            event.preventDefault() //no captura en el onchange y no se escribe en el input
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Ingresar Nombre"
                    name='name'
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    // onKeyDown={handleKey}
                     />
                <input type="text"
                    placeholder="Ingresar Apellido"
                    name='mail'
                    onChange={(e) => setData({ ...data, lastName: e.target.value })}
                    value={data.lastName}
                    // onKeyDown={handleKey}
                    />

                <input type="text"
                    placeholder="Telefono"
                    name='lastName'
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    value={data.phone}
                    // onKeyDown={handleKey}
                     />
                <input type="text"
                    placeholder="Mail"
                    name='phone'
                    onChange={(e) => setData({ ...data, mail: e.target.value })}
                    value={data.mail}
                    // onKeyDown={handleKey} 
                    />



                <button type="submit">Finalizar Compra</button>


            </form>
        </div>
    )
}

export default Form
