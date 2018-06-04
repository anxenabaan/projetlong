var profil = document.getElementById("btnprofil");
var fermer = document.getElementById("btnclose")
var ouvrir = document.getElementById("menuperso");

profil.addEventListener("click", function(){
  ouvrir.classList.toggle("hide");
  console.log("a");
});


fermer.addEventListener("click", function(){
  ouvrir.classList.toggle("hide");
  console.log("b");
});
