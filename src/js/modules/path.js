var stateNegativo = document.querySelectorAll('div.negativo')
var statePositivo = document.querySelectorAll('div.positivo')
var colorSetTodos  = document.querySelector('#todos')      
var colorSetPagos = document.querySelector('#pagos')
var colorSetrecebidos = document.querySelector('#recebidos')
var colorSetGraph1 = document.querySelector('#graph1')
var colorSetGraph2 = document.querySelector('#graph2')
var colorSetGraph3 = document.querySelector('#graph3')
var colorSetPagar = document.querySelector('#pagar') 
var colorSetAgendar = document.querySelector('#agendar-pagamento')
var colorSetSimular = document.querySelector('#simulacao')
var colorSetReceber = document.querySelector('#receber')
var colorSetAgendarP = document.querySelector('#agendar-receber')
var colorSetSimularP = document.querySelector('#simulacao-receber')




function graphics() {
    document.getElementById("graph").style.display = "flex";
    document.getElementById("paymants").style.display = "none"
    document.getElementById("mySideBar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sub-header-pagar").style.display = "none";
    document.getElementById("sub-header-receber").style.display = "none";

    stateNegativo[0].style.display = "none"
    stateNegativo[1].style.display = "none"
    statePositivo[0].style.display = "none"
    statePositivo[1].style.display = "none"
    colorSetGraph1.style.color = "#0000FF"
    colorSetGraph1.style.borderBottom = "solid #0000FF"
    colorSetGraph2.style.removeProperty('color')
    colorSetGraph2.style.removeProperty('border-bottom')
    colorSetGraph3.style.removeProperty('color')
    colorSetGraph3.style.removeProperty('border-bottom')
  }

function inicio() {
    document.getElementById("graph").style.display = "none";
    document.getElementById("paymants").style.display = "flex"
    document.getElementById("mySideBar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sub-header-pagar").style.display = "none";
    document.getElementById("sub-header-receber").style.display = "none";

    stateNegativo[0].style.display = "grid"
    stateNegativo[1].style.display = "grid"
    statePositivo[0].style.display = "grid"
    statePositivo[1].style.display = "grid"
    colorSetTodos.style.color = "#0000FF"
    colorSetTodos.style.borderBottom = "solid #0000FF"
    colorSetPagos.style.removeProperty('color')
    colorSetPagos.style.removeProperty('border-bottom')
    colorSetrecebidos.style.removeProperty('color')
    colorSetrecebidos.style.removeProperty('border-bottom')
  }
function pagar(){
  document.getElementById("sub-header-pagar").style.display = "flex";
  document.getElementById("sub-header-receber").style.display = "none";
  document.getElementById("graph").style.display = "none";
  document.getElementById("paymants").style.display = "none"
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  stateNegativo[0].style.display = "none"
  stateNegativo[1].style.display = "none"
  statePositivo[0].style.display = "none"
  statePositivo[1].style.display = "none"
  colorSetPagar.style.color = "#0000FF"
  colorSetPagar.style.borderBottom = "solid #0000FF"
  colorSetAgendar.style.removeProperty('color')
  colorSetAgendar.style.removeProperty('border-bottom')
  colorSetSimular.style.removeProperty('color')
  colorSetSimular.style.removeProperty('border-bottom')
  }

function receber() {
  document.getElementById("sub-header-receber").style.display = "flex";
  document.getElementById("sub-header-pagar").style.display = "none";
  document.getElementById("graph").style.display = "none";
  document.getElementById("paymants").style.display = "none"
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";


  stateNegativo[0].style.display = "none"
  stateNegativo[1].style.display = "none"
  statePositivo[0].style.display = "none"
  statePositivo[1].style.display = "none"
  colorSetReceber.style.color = "#0000FF"
  colorSetReceber.style.borderBottom = "solid #0000FF"
  colorSetAgendarP.style.removeProperty('color')
  colorSetAgendarP.style.removeProperty('border-bottom')
  colorSetSimularP.style.removeProperty('color')
  colorSetSimularP.style.removeProperty('border-bottom')
}

export { graphics, inicio, pagar, receber }  
