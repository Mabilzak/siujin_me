const classNavbar = document.getElementsByClassName("navbar-keterangan-main");

//Saat Mengklik navbar-keterangan-main
const classNomor = document.getElementsByClassName("nomor-soljab-main");
const classSoljab = document.getElementsByClassName("place-soljab-main");
classNavbar[0].addEventListener("click", function () {
  const toggleno = classNomor[0].classList.toggle("matt-close_no");
  classNavbar[0].classList.toggle("navbar-click");
  classSoljab[0].classList.toggle("place_full");
});
