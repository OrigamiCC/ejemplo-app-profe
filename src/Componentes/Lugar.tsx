import React, { useEffect, useState } from 'react';
import './Lugares.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { checkIfHaveToken, redirectToLugares } from '../utils';
import { fetchLugar } from '../api';
import { useParams } from 'react-router-dom';
function Lugar() {
  const [lugar, setLugar] = useState<any>(null);
  let { id } = useParams();

useEffect(() => {
  fetchLugar(id).then((data: any) => setLugar(data));
}, []);

const redirectToUser = (username: string) => {
    window.location.replace(`/user/${username}`);
}


if(!checkIfHaveToken()){
  window.location.replace("/login");
  return null;
}

  return (
    <div className='App'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={lugar?.attributes?.imagen_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {lugar?.attributes?.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lugar?.attributes?.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => redirectToUser(lugar?.attributes?.user_creador.data.attributes.username)} size="small">{lugar?.attributes?.user_creador.data.attributes.username}</Button>
        <Button href={lugar?.attributes?.ubicacion} size="small">Ver en google maps</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default Lugar;
