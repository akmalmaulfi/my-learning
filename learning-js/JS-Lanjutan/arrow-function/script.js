//  Function Expression

// jika 1 Parameter
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Akmal Ganteng"));

// jika 2 parameter
// const tampilNama = (waktu, nama) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Pagi", "Akmal Maulfi"));

// Jika hanya sebaris saja functionya seperti diatas, maka bisa kita persingkat, dinamai dengan implisit return, menjadi :
// const tampilNama = (nama) => `Halo ${nama}, selamat datang!`;
// console.log(tampilNama("Akmal"));

// implisit return tanpa parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ["Akmal", "Mega", "Septi"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// jika kita ingin return mengembalikan object maka kurawal {} harus dibungkus dengan tanda kurung (), seprti berikut :
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));

// console.table(jumlahHuruf);

// KONSEP THIS PADA ARROW FUNCTION

// Constreuctor Function
// const Mahasiswa = function () {
//   this.nama = "Akmal";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(
//       `halo perkenalakan nama saya ${this.nama}, umur saya ${this.umur} tahun`
//     );
//   };
//   console.log(this);
// };

// const akmal = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Akmal";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(
//       `halo perkenalakan nama saya ${this.nama}, umur saya ${this.umur} tahun`
//     );
//   };
//   console.log(this);
// };

// const akmal = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
    // console.log(this);
  }, 600);
});
