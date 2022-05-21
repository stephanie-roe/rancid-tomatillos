import { id } from "./components/MovieDetailsContainer";

const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => {
    if(response.ok){
      return response.json();
    } else {
      throw Error(response.status);
    }})
  .catch(error => {
    console.log("error");
})
};

const allMovies = getAllMovies()






export { allMovies }
