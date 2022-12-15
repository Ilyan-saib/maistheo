/*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${config.VITE_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((dtaa) => {
      if (dtaa.cod == 404 || dtaa.cod == 400 ) { 
        console.log('cfo');
       }
       else{
        CreateElm(dtaa);*/





const config = import.meta.env
let submit = document.getElementById("btn")
let input = document.getElementById('formulaire')
let sectContainer = document.getElementById("sect-container")
let form = document.getElementById("form");

let town;



function CreateElm(data) {
  let sect = document.createElement('section')
  sect.classList.add('sect')


 let info_title = document.createElement('p')
  info_title.classList.add('town')
  info_title.innerText =  data.name + ` `
  
  let info_country = document.createElement('div')
  info_country.classList.add('pays')
 info_country =  data.sys.country



  let pic = document.createElement('img')
  pic.classList.add('icon')

  let info_desc = document.createElement('p')
  info_desc.classList.add('desc')

  sectContainer.appendChild(sect)
  sect.appendChild(info_title)
  sect.appendChild(info_country)

  sect.appendChild(info_desc)
  sect.appendChild(pic)
}


input.addEventListener('focus', () => {
  input.value = ""
})









