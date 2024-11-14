import axios from 'axios';

//const API_KEY = 'AIzaSyAE-VlmSIsbsxPT8idmWQGv8eaHp73z6eg';
const API_KEY='AIzaSyCS8BXjzcK3Rkm5LFhi7DMBwLOtb5gYRpo'

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

//   console.log('-----------response----------',response,)

  const token = response.data.idToken;
//   console.log('-----------response----------',response,token)
  return token;
}

export  function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export  function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}