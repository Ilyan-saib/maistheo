const config = import.meta.env

let test = prompt('ville ?')
let title = document.getElementById('test')
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${test}&appid=${config.VITE_API_KEY}&units=metric`)
  .then((response) => response.json())
  .then((dta) => console.log(dta));
  // .then((data) => title.innerHTML = data.cod);