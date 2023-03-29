import styles from "../ItemListContainer/ItemListContainer.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export const Item = ({ elemento }) => {
    return (
        <div className={styles.cardProductos}>

            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/itemDetail/${elemento.id}`}>
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
                <CardActions>
                    <Button size="small">Anadir a Carrito</Button>
                </CardActions>
            </Card>

        </div>
    )
}

