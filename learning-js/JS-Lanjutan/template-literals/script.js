// Template Literals / Template String

// Sederhana
// const nama = "Akmal Maulfi Anwar";
// const umur = 20;
// console.log(
//   `Halo perkenalkan nama saya ${nama}, dan saya berumur ${umur} tahun`
// );

// Embeded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Hello")}`);
// const x = 15;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Collection
const mhs = {
  nama: "Akmal Maulfi Anwar",
  umur: 20,
  npm: 202010225032,
  email: "akmalmaulfi@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
