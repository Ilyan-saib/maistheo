/*fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${config.VITE_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((dtaa) => {
      if (dtaa.cod == 404 || dtaa.cod == 400 ) { 
        console.log('cfo');
       }
       else{
        CreateElm(dtaa);*/




 const token = import.meta.env.VITE_API_KEY
let submitte = document.getElementById("btn")
let input = document.getElementById('formulaire')
let sectContainer = document.getElementById("sect-container")
let form = document.getElementById("form");

let town;

 

function CreateElm(info) {
  let sect = document.createElement('section')
   sect.classList.add('sect')

   let iconoblaste = info.weather[0].icon

  let info_title = document.createElement('p')
  info_title.classList.add('town')
  info_title.innerText =  info.name 
  sect.appendChild(info_title);

   let country = document.createElement('div')
   country.classList.add('pays')
   info_title.appendChild(country);   //la ligne qui fait chier

   let info_country = document.createElement('span')
   info_country.classList.add('pays_Content')
   info_country.innerText =  info.sys.country
   country.appendChild(info_country);
  


  
 
  let info_temp = document.createElement('p')
  info_temp.innerText = `${info.main.temp}°C` 
  info_temp.classList.add('temp')
  sect.appendChild(info_temp)
  
  let pic = document.createElement('img')
  pic.classList.add('ico')
  pic.src = `http://openweathermap.org/img/wn/${iconoblaste}.png`
  sect.appendChild(pic);


  let info_desc = document.createElement('p')
  info_desc.classList.add('desc')
  info_desc.innerText = info.weather[0].main
  sect.appendChild(info_desc);



  sectContainer.appendChild(sect);
  
  
  
  
}




input.addEventListener('focus', () => {
  input.value = ""
})



submitte.addEventListener('click',()=>{

 town = input.value


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${token}&units=metric`)
  .then((response) => response.json())
  .then((data) => {

if (data.cod == 400 || data.cod == 404) {

 input.value = " Error!!"
}
else{
  console.log(data);
  CreateElm(data)
}

  })

})









  
   




