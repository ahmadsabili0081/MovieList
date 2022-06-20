let searchEl = document.querySelector('.searchInput');
let btnS = document.querySelector('.searchBtn');
let row = document.querySelector('.row__apps__movies');
const apiKey = "04c35731a5ee918f014970082a0088b1"
const UrlMovie = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const imgURL = "https://image.tmdb.org/t/p/w1280"
const searchURL = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

async function getMovie(url){
  let data  = await fetch(url)
  let getData = await data.json()
  let movies = getData.results;
  console.log(movies)
  displayMovie(movies)
}
getMovie(UrlMovie)
function displayMovie(getData){
  row.innerHTML = ""
  getData.forEach((resultMovies) => {
    let {poster_path,title,release_date,vote_average,overview} = resultMovies;
    let box = document.createElement('div');
    box.classList.add('box__movies');
    box.innerHTML = `<img src="${imgURL + poster_path}"/>
                    <h3>${resultMovies.title}</h3>
                    <div class="ratingMovie">
                      <span class="releaseData">${resultMovies.release_date}</span>
                      <span>${resultMovies.vote_average} <i class="fa fa-star"></i></span>
                    </div>
                    <div class="overview">
                    <h3>${title}</h3>
                    ${overview}</div>
    `
    row.appendChild(box);
  });
}


btnS.addEventListener('click',  () => {
  let resultSearch = searchEl.value;
  if(resultSearch){
    getMovie(searchURL + resultSearch);
    searchEl.value = ""
  }else{
    window.alert('Isi list search kamu')
  }
  
});

let container = document.querySelector('.container')
let mediaScreen = matchMedia("(max-width:570px)");
mediaScreen.addListener(handleScreen)
function handleScreen(e){
  if(e.matches){
    container.style.display = "none"
  }else{
    container.style.display = "block"
  }
}