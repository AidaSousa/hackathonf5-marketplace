import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import iMetro from "../../assets/icons/iMetro.svg";
import iBath from "../../assets/icons/iBath.svg";
import iDorm from "../../assets/icons/iDorm.svg";
import Card1 from "../../assets/img/Carousel2.jpg"
import "../views/ViewDescription.css";
import Carousel from '../molecules/carousel';
import CarouselItem from '../atoms/carouselItem';
import trial1 from '../../assets/img/trial1.png';
import trial2 from '../../assets/img/trial2.png';


function ViewDescription1() {

    return (
        <div className='viewContainer'>
            <Carousel>
                <CarouselItem><img src={trial1} style={{width: "100%"}}/></CarouselItem>
                <CarouselItem><img src={trial2} style={{width: "100%"}}/></CarouselItem>
            </Carousel>
            <Card sx={{ maxWidth: 1500 }} className="containerCard">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='textCard'>
                        <h5>200.000€</h5>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" className='textCard'>
                        <h5>Promoción en C. Londres <span className='subtitleCards'>100m²<img src={iMetro} alt="icon metro" /> 1 dorm.<img src={iDorm} alt="icon dormitorio" /> 1 baño<img src={iBath} alt="icon baño" /></span></h5>
                    </Typography>
                    <Typography variant="body2" color="text.primary" className='textCard'>
                        Descripción
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ViewDescription1;