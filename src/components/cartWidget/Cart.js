import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import styles from "../cartWidget/Cart.module.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NoInfo } from '../noInfo/NoInfo';
import Form from '../form/form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Orders } from '../orders/Orders';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Cart = () => {

  const [buy, setBuy] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState({})
  console.log(orderId)

  const { cart, clearCart, getTotalPrice, deleteProductoById } = useContext(CartContext)
  console.log(cart)

  function createData(resumen, valor) {
    return { resumen, valor };
  }
  const rows = [
    createData('Cantidad de productos', `${cart.length}`),
    createData('SubTotal', getTotalPrice() > 0 ? getTotalPrice() : "No hay items"),
    createData('Descuentos', 0),
    createData('Total', `${getTotalPrice()}`),
  ];

  /*   if (cart.length < 1) {
      return <h2>Carrito esta vacio</h2>
    } */
  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref)
        .then(res => {
          setOrder({
            id: res.id,
            ...res.data()
          })
        })
    }
  }, [orderId])
  console.log(order)

  if (orderId) {
    return <div>
      <h1>Tu orden de compra es:  {orderId} </h1>
      <Orders order={order}></Orders>
      <Link to={"/"}>Volver a Comprar</Link>
    </div>
  }




  return (
    <>
      <div className={styles.cart}>
        <div>
          <div>
            {cart.map(item => (
              <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={item.img} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {item.descripcion}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {`Cantidad: ${item.quantity}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => { deleteProductoById(item.id) }}>
                          Borrar
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        {`S/. ${item.price}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
            {cart.length < 1 && <NoInfo></NoInfo>} {/* //ACA TAMBIEN SE PUEDE COLOCAR UN COMPONENTE */}
          </div>
          <div>
            <button onClick={() => { clearCart() }}>Borrar Todo</button>
          </div>

        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Resumen de Compra</b></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.resumen}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.resumen}
                    </TableCell>
                    <TableCell align="right">{row.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div>
          {buy ? (<Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />) : (<div>
            <Button variant='contained' onClick={() => { setBuy(true) }}>Comprar</Button>
          </div>)}

        </div>
      </div>
      <div>
        <Orders order={order}></Orders>
      </div>
    </>

  )
}

export default Cart