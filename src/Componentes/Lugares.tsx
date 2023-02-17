import React, { useEffect, useState } from 'react';
import './Lugares.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { checkIfHaveToken } from '../utils';
import { fetchLugares } from '../api';
function Lugares(props?: any) {
  const [lugares, setLugares] = useState([]);

useEffect(() => {
  if(!props.lugares) {
    fetchLugares().then((data: any) => setLugares(data));
  }else{
    setLugares(props.lugares);
  }

}, []);

const redirectToLugar = (id: any) => {
  window.location.replace(`/lugar/${id}`);
}

if(!checkIfHaveToken()){
  window.location.replace("/login");
  return null;
}

  return (
    <div className='App'>
      {lugares?.map((lugar: any) => (
          <><Card onClick={() => redirectToLugar(lugar?.id)} key={lugar?.id} style={{ width: '18rem', margin: '15px', cursor: 'pointer' }}>
          <Card.Img variant="top" src={lugar?.attributes?.imagen_url} />
          <Card.Body>
            <Card.Title>{lugar?.attributes?.nombre}</Card.Title>
            <Card.Text>
              {lugar?.attributes?.descripcion}
            </Card.Text>
            <Button href={lugar?.attributes?.ubicacion} variant="primary">
              Ver en google maps
            </Button>
          </Card.Body>
        </Card><br /></>
      ))}
    </div>
  );
}

export default Lugares;
