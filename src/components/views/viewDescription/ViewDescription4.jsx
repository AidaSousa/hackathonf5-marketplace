import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import iMetro from "../../assets/icons/iMetro.svg";
import iBath from "../../assets/icons/iBath.svg";
import iDorm from "../../assets/icons/iDorm.svg";
import Card1 from "../../assets/img/Carousel2.jpg"
import "./ViewDescription.css";
import { Link } from 'react-router-dom';

function ViewDescription4() {
    
  return (
    <Card sx={{ maxWidth: 1500 }} className="containerCard">
        <CardActionArea>
            <CardMedia
                component="img"
                height="400"
                image={Card1}
                alt="View1"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='textCard'>
                <h5>200.000€</h5>
            </Typography>
            <Link to="/contact" className='linkCard'><Buttons/></Link>
            <Typography gutterBottom variant="h5" component="div"className='textCard'>
                <h5>Promoción en C. Londres <span className='subtitleCards'>100m²<img src={iMetro} alt="icon metro"/> 1 dorm.<img src={iDorm} alt="icon dormitorio"/> 1 baño<img src={iBath} alt="icon baño" /></span></h5>
            </Typography>
            <Typography variant="body2" color="text.primary" className='textCard'>
                Descripción
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default ViewDescription4;