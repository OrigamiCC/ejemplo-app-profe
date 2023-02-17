import React, { useEffect, useState } from 'react';
import './Lugares.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { checkIfHaveToken } from '../utils';
import { fetchUser, fetchLugares, fetchEventos} from '../api';
import { useParams } from 'react-router-dom';
import Lugares from './Lugares';
import Eventos from './Eventos';
function User() {
  const [state, setState] = useState<any>({});

  let { username } = useParams();

useEffect(() => {
  fetchUser(username).then(async (data: any) => {
    const lugares = await fetchLugares(data?.id).then((events: any) => events);
    const eventos = await fetchEventos(data?.id).then((places: any) => places);
    setState({user: data, lugares: lugares, eventos: eventos});
    });
}, []);


if(!checkIfHaveToken()){
  window.location.replace("/login");
  return null;
}

  return (
    <div className='User'>
         <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {state?.user?.username}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {state?.user?.email}
        </Typography>
      </CardContent>
    </Card>
    <br/>
    <br/>
    {(state?.lugares && <Lugares lugares={state?.lugares}/> )}
    {(state?.eventos && <Eventos eventos={state?.eventos}/>)}
    </div>
  );
}

export default User;
