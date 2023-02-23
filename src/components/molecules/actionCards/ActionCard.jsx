import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import iMetro from "../../../assets/icons/iMetro.svg";
import iBath from "../../../assets/icons/iBath.svg";
import iDorm from "../../../assets/icons/iDorm.svg";
import "../actionCards/actionCard.css"

export default function ActionAreaCard({img, price, direc, m, hab, bath}) {
  
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardActionArea className='containerCards'>
        <CardMedia
          component="img"
          image={img} 
          alt="home"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='textCard'>
            <h5>{price}</h5>
          </Typography>
          <Typography gutterBottom variant="h5" component="div"className='textCard'>
            <h5>{direc}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary" className='textCard'>
          {m}<img src={iMetro} alt="icon metro"/> {hab}<img src={iDorm} alt="icon dormitorio"/> {bath}<img src={iBath} alt="icon baño" />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

