import Not_found from "./src/views/404";
import About from "./src/views/About";
import Gallery from "./src/views/Gallery";
import Home from "./src/views/Home";
import "./style.css";


let app = document.getElementById('app');
// mendapatkan dan memanggil page dengan ${}
// page.replace = function mengganti
let page = document.location.pathname

// app.innerHTML = `
// <div class="container">
// <h1>Hello SPA</h1>
// <h3>${page.replace('/', '')}</h3>
// </div>
// `

// fungsi switch
switch(page) {
  // tampilan kondisi awal
  case'/' : 
  app.innerHTML = Home()
  break;

  case'/about' : 
  app.innerHTML = About()
  break;

  case'/gallery' : 
  app.innerHTML = Gallery()
  break;

// ketika tidak ada dalam kondisi di atas
  default : 
  app.innerHTML = Not_found()
}

