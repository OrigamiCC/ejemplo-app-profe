import React from 'react';

function NotFound() {
  const token = localStorage.getItem('token');


  if(!token){
    window.location.replace("/login");
  }
  
  return (
    <div>
      PAGE NOT FOUND
    </div>
  );
}

export default NotFound;