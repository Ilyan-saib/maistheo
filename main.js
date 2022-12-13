const config = import.meta.env
let submit = document.getElementById("btn")
let input = document.getElementById('formulaire')
let sectContainer = document.getElementById("sect-container")

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
  sect.appendChild(info_country)
  sect.appendChild(info_title)
  sect.appendChild(info_desc)
  sect.appendChild(pic)
}


input.addEventListener('focus', () => {
  input.value = ""
})


input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
   town = input.value     
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${config.VITE_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((dta) => {
      if (dta.cod == 404 || dta.cod == 400 ) { 
        console.log('cfo');
       }
       else{
        CreateElm(dta);
       }  
    })

  input.value = ""





}
  }
  )

 submit.addEventListener("click", ()=> {
    town = input.value
        
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${config.VITE_API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((dta) => {
       if (dta.cod == 404 || dta.cod == 400) { 
        console.log('cfo');
       }
       else{
        CreateElm();
       }
    })

  input.value = "Search for a city"


    


}
  
  )


