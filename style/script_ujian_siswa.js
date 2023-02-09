const classNavbar = document.getElementsByClassName("navbar-keterangan-main");

//Saat Mengklik navbar-keterangan-main
const classNomor = document.getElementsByClassName("nomor-soljab-main");
const classSoljab = document.getElementsByClassName("place-soljab-main");
classNavbar[0].addEventListener("click", function () {
  const toggleno = classNomor[0].classList.toggle("matt-close_no");
  classNavbar[0].classList.toggle("navbar-click");
  classSoljab[0].classList.toggle("place_full");
});

//Sweetalert2 11.2.7
// Button 'finish-main'
const classFinish = document.getElementsByClassName("finish-main");
classFinish[0].addEventListener("click", function () {
  Swal.fire({
    icon: "warning",
    iconColor: "#E10000",
    title: "Apakah Kamu Yakin",
    text: "Anda hanya bisa melakukannya satu, tidak dapat mengulang ujian lagi.",
    showCancelButton: true,
    confirmButtonText: "Lanjut",
    confirmButtonColor: "#31489e",
    cancelButtonText: "Batal",
    cancelButtonColor: "#E10000",
  });
});
