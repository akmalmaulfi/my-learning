// function init() {
//   // let nama = "Akmal";

//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }

// let panggilNama = init();
// panggilNama("Akmal Ganteng");

// DI RINGKAS
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama("Maulfi");

// FACTORY FUNCTION / membuat function sesuai dengan function yang lain
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// // selamatMalam("Akmal");
// console.dir(selamatMalam("Akmal"));
