export const fetchLugares = (user_id?: string) => {
  if(user_id){
    return fetch(`http://localhost:1337/api/lugares?populate=deep&filters[user_creador][id][$eq]=${user_id}`)
      .then(response => response.json())
      .then(
        (resultadoApi) => {
          return resultadoApi.data;
        }
      )
  }else{
    return fetch("http://localhost:1337/api/lugares?populate=deep")
    .then(response => response.json())
    .then(
      (resultadoApi) => {
        return resultadoApi.data;
      }
    )
  }
};

export const fetchLugar = (id?: string) => {
  return fetch(`http://localhost:1337/api/lugares/${id}?populate=deep`)
    .then(response => response.json())
    .then(
      (resultadoApi) => {
        return resultadoApi.data;
      }
    )
};

export const fetchEventos = (user_id?: string) => {
  if(user_id){
    return fetch(`http://localhost:1337/api/eventos?populate=deep&filters[user_creador][id][$eq]=${user_id}`)
    .then(response => response.json())
    .then(
      (resultadoApi) => {
        return resultadoApi.data;
      }
    )
  }
      else{
        return fetch("http://localhost:1337/api/eventos?populate=deep")
        .then(response => response.json())
        .then(
          (resultadoApi) => {
            return resultadoApi.data;
          }
        )
      }
};

export const login = (user: string, password: string) => {
    fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        identifier: user,
        password: password
    })
      }).then((respo) => respo.json())
      .then((res) => {
            if(res?.jwt){
              localStorage.setItem("token", res?.jwt);
              localStorage.setItem("user_id", res?.user?.id);
              window.location.reload();
            }else{
              alert("Usuario invalido, revise sus credenciales");
            }
      });
      fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        identifier: user,
        password: password
    })
      }).then((respo) => respo.json())
      .then((res) => {
            if(res?.jwt){
              localStorage.setItem("token", res?.jwt);
              localStorage.setItem("user_id", res?.user?.id);
              window.location.reload();
            }else{
              alert("Usuario invalido, revise sus credenciales");
            }
      });
}

export const registro = (user: string, email: string, password: string) => {
    fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      username: user,
      email: email,
      password: password
  })
    }).then((respo) => respo.json())
    .then((res) => {
          if(res?.jwt){
            localStorage.setItem("token", res?.jwt);
            localStorage.setItem("user_id", res?.user?.id);
            window.location.reload();
          }else{
            alert("Datos invalidos");
          }
    });
}

export const fetchUser = (username?: string) => {
  return fetch(`http://localhost:1337/api/users?filters[username][$eq]=${username}`)
    .then(response => response.json())
    .then(
      (resultadoApi) => {
        return resultadoApi[0];
      }
    )
};