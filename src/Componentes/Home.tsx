import React from 'react';
import { checkIfHaveToken } from '../utils';

function Home() {

  if(!checkIfHaveToken()){
    window.location.replace("/login");
    return null;
  }

  return (
    <div>
      COMPONENTE HOME
    </div>
  );
}

export default Home;