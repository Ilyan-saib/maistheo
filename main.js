const config = import.meta.env
let submit = document.getElementById("btn")
let input = document.getElementById('formulaire')
const sectContainer = document.getElementById("sect-container")

let town;






input.addEventListener('focus', () => {
  input.value = ""
})




submit.addEventListener('click', () => {

  town = input.value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${config.VITE_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((dta) => console.log(dta))

  input.value = "Search for a city"


  let sect = document.createElement('section')
  sect.classList.add('sect')

  let info_title = document.createElement('p')
  info_title.classList.add('town')

  let info_country = document.createElement('div')
  info_country.classList.add('pays')

  let pic = document.createElement('img')
  pic.classList.add('icon')

  let info_desc = document.createElement('p')
  info_desc.classList.add('desc')

  sectContainer.appendChild(sect)
  sect.appendChild(info_title)
  sect.appendChild(info_country)
  sect.appendChild(info_desc)
  sect.appendChild(pic)
})



