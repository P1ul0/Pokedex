export let fakeDB = [
  {
    nome: "Paulo",
    email: "paulocesar@gmail.com",
    senha: "12345678",
    genero: "masculino",
    favorito:[]
  },
];

export const findUser = (email)=> {
  let user = null;
  for (let i of fakeDB) {
    if (i.email == email) {
      user = i;
      break;
    }
  }
  return user;
}

export const addFavorite = (email, value) => {
  const user = findUser(email);
  console.log(user);
  if (user != null) {
    if (user.favorito== null) {
      user.favorito = []; // cria um novo array de favoritos se não existir
    }
    user.favorito.push(value);
    localStorage.setItem("usuário", JSON.stringify(user));
  }
};

export const removeFavorite = (email, value) => {
  const user = findUser(email);

  let remove =  user.favorito.filter(item => item !== value)
  user.favorito = remove
  localStorage.setItem("usuário", JSON.stringify(user));
};