document.getElementById("todos").style.color = "#0000FF"
document.getElementById("todos").style.borderBottom = "solid #0000FF"
// 
document.getElementById("graph1").style.color = "#0000FF"
document.getElementById("graph1").style.borderBottom = "solid #0000FF"


function todosElement(){
document.getElementById("todos").style.color = "#0000FF"
document.getElementById("todos").style.borderBottom = "solid #0000FF"
document.getElementById("pagos").style.color = "#000000"
document.getElementById("pagos").style.borderBottom = "none"
document.getElementById("recebidos").style.color = "#000000"
document.getElementById("recebidos").style.borderBottom = "none"
document.getElementById("positivo").style.display = "grid"
document.getElementById("negativo").style.display = "grid"
}

function pagosElement(){
document.getElementById("todos").style.color = "#000000"
document.getElementById("todos").style.borderBottom = "none"
document.getElementById("pagos").style.color = "#0000FF"
document.getElementById("pagos").style.borderBottom = "solid #0000FF"
document.getElementById("recebidos").style.color = "#000000"
document.getElementById("recebidos").style.borderBottom = "none"
document.getElementById("positivo").style.display = "none"
document.getElementById("negativo").style.display = "grid"
}

function recebidosElement(){
document.getElementById("todos").style.color = "#000000"
document.getElementById("todos").style.borderBottom = "none"
document.getElementById("pagos").style.color = "#000000"
document.getElementById("pagos").style.borderBottom = "none"
document.getElementById("recebidos").style.color = "#0000FF"
document.getElementById("recebidos").style.borderBottom = "solid #0000FF"
document.getElementById("positivo").style.display = "grid"
document.getElementById("negativo").style.display = "none"
}

// FUNÇÕES PARA OS GRAFICOS (A FAZER AINDA)

function graphElement1(){
document.getElementById("graph1").style.color = "#0000FF"
document.getElementById("graph1").style.borderBottom = "solid #0000FF"
document.getElementById("graph2").style.color = "#000000"
document.getElementById("graph2").style.borderBottom = "none"
document.getElementById("graph3").style.color = "#000000"
document.getElementById("graph3").style.borderBottom = "none"
document.getElementById("positivo").style.display = "none"
document.getElementById("negativo").style.display = "none"
}

function graphElement2(){
document.getElementById("graph1").style.color = "#000000"
document.getElementById("graph1").style.borderBottom = "none"
document.getElementById("graph2").style.color = "#0000FF"
document.getElementById("graph2").style.borderBottom = "solid #0000FF"
document.getElementById("graph3").style.color = "#000000"
document.getElementById("graph3").style.borderBottom = "none"
document.getElementById("positivo").style.display = "none"
document.getElementById("negativo").style.display = "none"
}

function graphElement3(){
document.getElementById("graph1").style.color = "#000000"
document.getElementById("graph1").style.borderBottom = "none"
document.getElementById("graph2").style.color = "#000000"
document.getElementById("graph2").style.borderBottom = "none"
document.getElementById("graph3").style.color = "#0000FF"
document.getElementById("graph3").style.borderBottom = "solid #0000FF"
document.getElementById("positivo").style.display = "none"
document.getElementById("negativo").style.display = "none"
}
                    