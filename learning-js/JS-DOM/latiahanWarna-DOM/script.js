const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("bg");
});

// membuat button baru
const btn2 = document.createElement("button");
const tBtn2 = document.createTextNode("Acak Warna");
btn2.appendChild(tBtn2);
btn2.style.display = "block";
btn2.style.margin = "20px auto";
btn.after(btn2);

btn2.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
sMerah.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + sMerah.value + ", " + sHijau.value + ", " + sBiru.value + ")";
});

const sHijau = document.querySelector("input[name=sHijau]");
sHijau.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + sMerah.value + "," + sHijau.value + ", " + sBiru.value + ")";
});

const sBiru = document.querySelector("input[name=sBiru]");
sBiru.addEventListener("input", function () {
  document.body.style.backgroundColor =
    "rgb(" + sMerah.value + ", " + sHijau.value + ", " + sBiru.value + ")";
});

// Mouse
document.body.addEventListener("mousemove", function (event) {
  // utk mengetahui koordinat sumbu x dari posisi mouse
  // console.log(event.clientX);
  // utk mengetahui ukuran lebar dari browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(xPos, yPos);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
