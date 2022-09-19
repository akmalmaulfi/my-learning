// * Macam - macam request ke API.

// ? pakai JQuery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=aa4f4e0&i=tt1201607",
//   success: (movies) => console.log(movies),
// });

// ? pakai Ajax versi Vanilla javasript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=aa4f4e0&i=tt1201607");
// xhr.send();

// ? pakai promise / Javascript Modern
// fetch("http://www.omdbapi.com/?apikey=aa4f4e0&i=tt1201607")
//   .then(response => response.json())
//   .then(response => console.log(response));

// ^ Apa itu Promise ?
// ? Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// ? janji (terpenuhi / ingkar);
// ? states (fulfilled / rejected / pending)
// ? untuk menjalankan keadaan ini ada 3 fungsi callback :
// ? callback (resolve) -> kita buat ketika janjinya terpenuhi
// ? callback (reject) -> kita buat ketika janjinya tidak terpenuhi
// ? callback (finally) -> ketika waktu tunggunya selesai, baik janjinya dipenuhi ataupun tidak terpenuhi
// ? didalam promise ada aksi() yang akan kita lakukan ketika janjinya terpenuh atau tidak terpenuhi.
// ? kalau terpenuhi aksi (then), kalau tidak terpenuhi aksi (catch)

// * Contoh 1 Promise sederhana
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati!');
//   } else {
//     reject('Ingkar Janji');
//   }
// });

// janji1.then(response => console.log('OK!: ' + response)).catch(response => console.log('NOT OK! : ' + response));

// * Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu');
//     }, 2000);
//   }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then(response => console.log('OK :' + response))
//   .catch(response => console.log('NOT OK :' + response));
// console.log('selesai');

// * Promise.all() -> ketika kita ingin menjalankan promise sekaligus / banyak
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avenger',
      sutradara: 'Akmal Maulfi',
      pemeran: 'Mega Septi'
    }])
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      temp: 26,
      kondisi: 'Cerah Berawan'
    }]);
  }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca]).then(response => {
  const [film, cuaca] = response
  console.log(film);
  console.log(cuaca);
});
