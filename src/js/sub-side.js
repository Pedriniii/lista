import { graphics, inicio, pagar, receber } from './modules/path.js'
const funcGraphics = graphics
const funcInicio = inicio
const funcPagar = pagar
const funcReceber = receber

document.getElementById("todos").style.color = "#0000FF"
document.getElementById("todos").style.borderBottom = "solid #0000FF"
// 
document.getElementById("graph1").style.color = "#0000FF"
document.getElementById("graph1").style.borderBottom = "solid #0000FF"




var navigationElement = document.querySelectorAll("a.item")
navigationElement.forEach((data) => {
    data.onclick = (info) =>{
        let id = data.getAttribute('data-id')
        let colorSetTodos  = document.querySelector('#todos')      
        let colorSetPagos = document.querySelector('#pagos')
        let colorSetrecebidos = document.querySelector('#recebidos')
        let colorSetGraph1 = document.querySelector('#graph1')
        let colorSetGraph2 = document.querySelector('#graph2')
        let colorSetGraph3 = document.querySelector('#graph3')
        let colorSetPagar = document.querySelector('#pagar') 
        let colorSetAgendar = document.querySelector('#agendar-pagamento')
        let colorSetSimular = document.querySelector('#simulacao')
        let colorSetReceber = document.querySelector('#receber')
        let colorSetAgendarP = document.querySelector('#agendar-receber')
        let colorSetSimularP = document.querySelector('#simulacao-receber')
        let statePositivo = document.querySelectorAll('div.positivo')        
        let stateNegativo = document.querySelectorAll('div.negativo')

        switch(id){
            case 'todos':
                //exemplo de como deve mostrar o diplay(tem que limpar esse cod lixo)
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
                break
            case 'pagos':
                stateNegativo[0].style.display = "grid"
                stateNegativo[1].style.display = "grid"
                statePositivo[0].style.display = "none"
                statePositivo[1].style.display = "none"
                colorSetTodos.style.removeProperty('color')
                colorSetTodos.style.removeProperty('border-bottom')
                colorSetPagos.style.color = "#0000FF"
                colorSetPagos.style.borderBottom = "solid #0000FF"
                colorSetrecebidos.style.removeProperty('color')
                colorSetrecebidos.style.removeProperty('border-bottom')
                break
            case 'recebidos':
                stateNegativo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[0].style.display = "grid"
                statePositivo[1].style.display = "grid"
                colorSetTodos.style.removeProperty('color')
                colorSetTodos.style.removeProperty('border-bottom')
                colorSetPagos.style.removeProperty('color')
                colorSetPagos.style.removeProperty('border-bottom')
                colorSetrecebidos.style.color = "#0000FF"
                colorSetrecebidos.style.borderBottom = "solid #0000FF"
                break
            case 'graph1':
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
                break
            case 'graph2':
                stateNegativo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[0].style.display = "none"
                statePositivo[1].style.display = "none"
                colorSetGraph1.style.removeProperty('color')
                colorSetGraph1.style.removeProperty('border-bottom')
                colorSetGraph2.style.color = "#0000FF"
                colorSetGraph2.style.borderBottom = "solid #0000FF"
                colorSetGraph3.style.removeProperty('color')
                colorSetGraph3.style.removeProperty('border-bottom')
                break
            case 'graph3':
                stateNegativo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[0].style.display = "none"
                statePositivo[1].style.display = "none"
                colorSetGraph1.style.removeProperty('color')
                colorSetGraph1.style.removeProperty('border-bottom')
                colorSetGraph2.style.removeProperty('color')
                colorSetGraph2.style.removeProperty('border-bottom')
                colorSetGraph3.style.color = "#0000FF"
                colorSetGraph3.style.borderBottom = "solid #0000FF"
                break
            case 'pagar':
                colorSetPagar.style.color = "#0000FF"
                colorSetPagar.style.borderBottom = "solid #0000FF"
                colorSetAgendar.style.removeProperty('color')
                colorSetAgendar.style.removeProperty('border-bottom')
                colorSetSimular.style.removeProperty('color')
                colorSetSimular.style.removeProperty('border-bottom')
                break
            case 'agendar-pagamento':
                colorSetPagar.style.removeProperty('color')
                colorSetPagar.style.removeProperty('border-bottom')
                colorSetAgendar.style.color = "#0000FF"
                colorSetAgendar.style.borderBottom = "solid #0000FF"
                colorSetSimular.style.removeProperty('color')
                colorSetSimular.style.removeProperty('border-bottom')
                break
            case 'simulacao':
                colorSetPagar.style.removeProperty('color')
                colorSetPagar.style.removeProperty('border-bottom')
                colorSetAgendar.style.removeProperty('color')
                colorSetAgendar.style.removeProperty('border-bottom')
                colorSetSimular.style.color = "#0000FF"
                colorSetSimular.style.borderBottom = "solid #0000FF"
                break
            case 'receber':
                colorSetReceber.style.color = "#0000FF"
                colorSetReceber.style.borderBottom = "solid #0000FF"
                colorSetAgendarP.style.removeProperty('color')
                colorSetAgendarP.style.removeProperty('border-bottom')
                colorSetSimularP.style.removeProperty('color')
                colorSetSimularP.style.removeProperty('border-bottom')

                break
            case 'agendar-receber':
                colorSetReceber .style.removeProperty('color')
                colorSetReceber .style.removeProperty('border-bottom')
                colorSetAgendarP.style.color = "#0000FF"
                colorSetAgendarP.style.borderBottom = "solid #0000FF"
                colorSetSimularP.style.removeProperty('color')
                colorSetSimularP.style.removeProperty('border-bottom')

                break
            case 'simulacao-receber':
                colorSetReceber.style.removeProperty('color')
                colorSetReceber.style.removeProperty('border-bottom')
                colorSetAgendarP.style.removeProperty('color')
                colorSetAgendarP.style.removeProperty('border-bottom')
                colorSetSimularP.style.color = "#0000FF"
                colorSetSimularP.style.borderBottom = "solid #0000FF"

                break        
        }
    }
})


let btnInicio = document.querySelector('#inicio')
let btnGraph = document.querySelector('#btn-graph')
let btnPagar = document.querySelector('#btn-pagar')
let btnReceber = document.querySelector('#btn-receber')

btnInicio.onclick = funcInicio
btnGraph.onclick = funcGraphics
btnPagar.onclick = funcPagar
btnReceber.onclick = funcReceber