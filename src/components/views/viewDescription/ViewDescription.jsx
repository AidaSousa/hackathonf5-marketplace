import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import iMetro from "../../../assets/icons/iMetro.svg";
import iBath from "../../../assets/icons/iBath.svg";
import iDorm from "../../../assets/icons/iDorm.svg";
import './ViewDescription.css';
import Carousel from '../../molecules/carousel/carousel'
import CarouselItem from '../../atoms/carouselItem/carouselItem';
import trial1 from '../../../assets/img/trial1.png';
import trial2 from '../../../assets/img/trial2.png';
import Buttons from '../../atoms/Buttons/Buttons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function ViewDescription() {
    const url = 'http://localhost:8000/api/pisos/'
    const [data, setData] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        const getElementsById = async () => {
          const response = await axios.get(`${url}${id}`);
          setData(response.data)
            console.log(response.data)

        }
        getElementsById();
      }, [])

    return (
        <div className='viewContainer'>
            <Carousel>
                <h1>HOLI</h1>
                <CarouselItem><img src={trial1} style={{width: "100%"}} alt=""/></CarouselItem>
                <CarouselItem><img src={trial2} style={{width: "100%"}} alt=""/></CarouselItem>
            </Carousel>
            <Card sx={{ maxWidth: 2000 }} className="containerCard">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='textCard'>
                        <h5>{data.precio}€</h5>
                    </Typography>
                    <Link to="/contact" className='linkCard'><Buttons/></Link>
                    <Typography gutterBottom variant="h5" component="div" className='textCard'>
                        <h5>{data.ciudad} <span className='subtitleCards'>{data.extension}m²<img src={iMetro} alt="icon metro" /> {data.habitaciones} dorm.<img src={iDorm} alt="icon dormitorio" /> {data.baños} baño/s<img src={iBath} alt="icon baño" /></span></h5>
                    </Typography>
                    <Typography variant="body2" color="text.primary" className='textCard'>
                        {data.descripcion}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ViewDescription;