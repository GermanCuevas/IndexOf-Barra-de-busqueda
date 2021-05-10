
let myCard = document.getElementById("mycard")

let miURL = "https://api.jsonbin.io/b/608995eeacc8d11948f44141/2"

const miBusqueda = document.getElementById("input-name")
const miBoton = document.getElementById('boton')








  fetch(miURL).then(respuesta => respuesta.json()).then((data)=>{
    
  // let aux = ''

   function filtrar (){

    myCard.innerHTML= ''


    const texto = miBusqueda.value.toLowerCase()

    data.forEach(
        (d)=>{
  
          let buscarName = d.name.toLowerCase() // name: Juan --- name : pedro
          let buscarApellido = d.last.toLowerCase()
          let buscarMail = d.email.toLowerCase()
          let buscarId = d.id.toString()
          

          if(buscarName.indexOf(texto) !== -1 || buscarApellido.indexOf(texto) !== -1 || buscarMail.indexOf(texto) !== -1 || buscarId.indexOf(texto) !== -1 )/* || buscarMail.indexOf(texto) !==1 */ {
  
      myCard.innerHTML += 
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${d.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${d.last}</h6>
      <p class="card-text">EMAIL: ${d.email}</p>
      <p class="card-text">ID: ${d.id}</p>
      
     
    </div>
  </div>`
  
          }
  
        })
        if(myCard.innerHTML === ''){
            myCard.innerHTML = `<h4>PERSONA NO ENCONTRADA</h4>`
        }
    
}  // cierra filtrar()

      filtrar()
    
      miBoton.addEventListener("click", filtrar)
      miBusqueda.addEventListener("keyup", filtrar)
    }
      )










  {/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}