const battleshipShow = document.getElementById("battleshipTitle");
const platedateShow = document.getElementById("platedateTitle");
const perfecteveningShow = document.getElementById("perfecteveningTitle");

battleshipShow.addEventListener("click", handleClickB);
platedateShow.addEventListener("click", handleClickP);
perfecteveningShow.addEventListener("click", handleClickE);

document.getElementById("battleship").style.display = "none";
document.getElementById("platedate").style.display = "none";
document.getElementById("perfectevening").style.display = "none";

function handleClickB(evt) {
  var x = document.getElementById("battleship");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function handleClickP(evt) {
  var x = document.getElementById("platedate");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function handleClickE(evt) {
  var x = document.getElementById("perfectevening");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
