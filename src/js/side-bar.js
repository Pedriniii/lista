function sideButton_open() {
  document.getElementById("mySideBar").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function graphics() {
  document.getElementById("graph").style.display = "flex";
  document.getElementById("paymants").style.display = "none"
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function inicio() {
  document.getElementById("graph").style.display = "none";
  document.getElementById("paymants").style.display = "flex"
  document.getElementById("mySideBar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("mySideBar").style.display = "none";
}
