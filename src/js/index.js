import '../style/index.scss';
import { routes } from './routes';

const searchGame = () => {
  let search = document.getElementById("userInput").value;
  if (search == "") {
    search = PageList();
  } else {
    search = "&search=" + search;
  }
  return PageList(search);
};

document.querySelector("#userInput").addEventListener('keypress', (event) =>{
  if(event.key === 'Enter'){ 
    searchGame()
  };
})

const callRoute = () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
  
    const pageName = pathParts[0];
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
  
    if (pageFunction !== undefined) {
      pageFunction(pageArgument);
    }
};
  
window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());
  
console.log("Hello!")
console.log("TEST:", process.env.DB_HOST); 