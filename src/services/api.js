import axios from 'axios';

//https://api.hgbrasil.com/weather?key=db71b84b&lat=-23.682&lon=-46.875

// export const key = '04dc0a88'
 export const key = 'ca322ace';

 const api = axios.create({
     baseURL: 'https://api.hgbrasil.com'
 });

 export default api;

