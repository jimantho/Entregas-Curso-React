import React, { useContext } from 'react'
import ItemCount from '../itemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = ({ elemento }) => {
     const {addToCart, getQuantityById}= useContext(CartContext)

    const onAdd = (quantity) => {
        addToCart({...elemento, quantity: quantity})
        console.log("la cantidad es: ", quantity)
    }
    const quantity = getQuantityById(elemento.name)
    console.log(quantity)
    return (
        <div>
            {/* {console.log(elemento)} */}
            <Card sx={{ maxWidth: 345 }}>

                <Link to={`/itemDetail/${elemento.name}`}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={elemento.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            S/. {elemento.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {elemento.name}
                        </Typography>
                    </CardContent>
                </Link>
                <ItemCount onAdd ={onAdd} inicial={quantity}></ItemCount>
            
            </Card>

        </div>
    )
}

export default ItemDetailContainer;