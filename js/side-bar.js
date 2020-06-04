function sideButton_open() {
  document.getElementById("mySideBar").style.display = "block";

}

function graphics() {
  document.getElementById("graph").style.display = "flex";
  document.getElementById("paymants").style.display = "none"
  document.getElementById("mySideBar").style.display = "none";
}
  
function inicio() {
  document.getElementById("graph").style.display = "none";
  document.getElementById("paymants").style.display = "flex"
  document.getElementById("mySideBar").style.display = "none";
}