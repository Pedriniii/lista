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
        let colorSetGraph1
        let colorSetGraph2
        let colorSetGraph3
        let stateNegativo = document.querySelectorAll('div.negativo')
        let statePositivo = document.querySelectorAll('div.positivo')
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
                statePositivo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[1].style.display = "none"
                break
            case 'graph2':
                stateNegativo[0].style.display = "none"
                statePositivo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[1].style.display = "none"
                break
            case 'graph3':
                stateNegativo[0].style.display = "none"
                statePositivo[0].style.display = "none"
                stateNegativo[1].style.display = "none"
                statePositivo[1].style.display = "none"
                break
        }
    }
})


















// document.getElementById("todos").style.color = "#0000FF"
// document.getElementById("todos").style.borderBottom = "solid #0000FF"
// // 
// document.getElementById("graph1").style.color = "#0000FF"
// document.getElementById("graph1").style.borderBottom = "solid #0000FF"


// function todosElement(){
// document.getElementById("todos").style.color = "#0000FF"
// document.getElementById("todos").style.borderBottom = "solid #0000FF"
// document.getElementById("pagos").style.color = "#000000"
// document.getElementById("pagos").style.borderBottom = "none"
// document.getElementById("recebidos").style.color = "#000000"
// document.getElementById("recebidos").style.borderBottom = "none"
// document.getElementById("positivo").style.display = "grid"
// document.getElementById("negativo").style.display = "grid"
// }

// function pagosElement(){
// document.getElementById("todos").style.color = "#000000"
// document.getElementById("todos").style.borderBottom = "none"
// document.getElementById("pagos").style.color = "#0000FF"
// document.getElementById("pagos").style.borderBottom = "solid #0000FF"
// document.getElementById("recebidos").style.color = "#000000"
// document.getElementById("recebidos").style.borderBottom = "none"
// document.getElementById("positivo").style.display = "none"
// document.getElementById("negativo").style.display = "grid"
// }

// function recebidosElement(){
// document.getElementById("todos").style.color = "#000000"
// document.getElementById("todos").style.borderBottom = "none"
// document.getElementById("pagos").style.color = "#000000"
// document.getElementById("pagos").style.borderBottom = "none"
// document.getElementById("recebidos").style.color = "#0000FF"
// document.getElementById("recebidos").style.borderBottom = "solid #0000FF"
// document.getElementById("positivo").style.display = "grid"
// document.getElementById("negativo").style.display = "none"
// }

// // FUNÇÕES PARA OS GRAFICOS (A FAZER AINDA)

// function graphElement1(){
// document.getElementById("graph1").style.color = "#0000FF"
// document.getElementById("graph1").style.borderBottom = "solid #0000FF"
// document.getElementById("graph2").style.color = "#000000"
// document.getElementById("graph2").style.borderBottom = "none"
// document.getElementById("graph3").style.color = "#000000"
// document.getElementById("graph3").style.borderBottom = "none"
// document.getElementById("positivo").style.display = "none"
// document.getElementById("negativo").style.display = "none"
// }

// function graphElement2(){
// document.getElementById("graph1").style.color = "#000000"
// document.getElementById("graph1").style.borderBottom = "none"
// document.getElementById("graph2").style.color = "#0000FF"
// document.getElementById("graph2").style.borderBottom = "solid #0000FF"
// document.getElementById("graph3").style.color = "#000000"
// document.getElementById("graph3").style.borderBottom = "none"
// document.getElementById("positivo").style.display = "none"
// document.getElementById("negativo").style.display = "none"
// }

// function graphElement3(){
// document.getElementById("graph1").style.color = "#000000"
// document.getElementById("graph1").style.borderBottom = "none"
// document.getElementById("graph2").style.color = "#000000"
// document.getElementById("graph2").style.borderBottom = "none"
// document.getElementById("graph3").style.color = "#0000FF"
// document.getElementById("graph3").style.borderBottom = "solid #0000FF"
// document.getElementById("positivo").style.display = "none"
// document.getElementById("negativo").style.display = "none"
// }
                    