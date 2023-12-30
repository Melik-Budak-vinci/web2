// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar, Button } from 'bootstrap';
/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">myMovies</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/movies">View movies</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/movies/add">Add movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/about">About</a>
              </li>
               <li class="nav-item">
              
              </li>                          
            </ul>
          </div>
        </div>
      </nav>
  `;
  
  navbarWrapper.innerHTML = navbar;
  const backColor = localStorage.getItem('theme')
  const body = document.querySelector('body');
  body.setAttribute('data-bs-theme',backColor);

  const button = document.createElement('button');
  let valueForStorage;
  
  if(backColor==='dark'){
    button.className = 'btn btn-light'
    button.innerText = 'je suis noir'
    button.type = 'button';
    valueForStorage = 'light'
  }else{
  button.className = 'btn btn-secondary'
  button.innerText = 'je suis noir'
  button.type = 'button';
  valueForStorage = 'dark'
  }
  navbarWrapper.appendChild(button)

  button.addEventListener('click',()=>{
    localStorage.setItem('theme',valueForStorage);
    Navbar()
  })
};

export default Navbar;
