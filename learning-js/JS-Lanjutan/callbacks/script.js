// ^ Callback

// * Synchronous callback
// function nama(nama) {
//   alert(`Halo, ${nama}`);
// }

// ? mengirim parameter berupa function nama di representasikan sebagai callback
// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan Nama: ');
//   callback(nama)
// }

// ? memasukkan function callback nama sebagai argumen utk function tampilkanPesan
// tampilkanPesan(nama);

// ? atau bisa juga dengan menuliskan functionya seperti berikut.
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));


// const mhs = [
//   {
//     "nama": "Akmal Maulfi Anwar",
//     "npm" : "202010225032",
//     "email" : "akmalmaulfi@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 1
//   },
//   {
//     "nama": "Mega",
//     "npm" : "202010225042",
//     "email" : "megasept@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 2
//   },
//   {
//     "nama": "Septi",
//     "npm" : "202010225001",
//     "email" : "septi@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 3
//   },
//   {
//     "nama": "Sismawati",
//     "npm" : "2020102250021",
//     "email" : "sismawati@gmail.com",
//     "jurusan" : "Manajemen",
//     "idDosenWali" : 4
//   }
// ];

// ? Synchronous ->  jika seperti ini maka proses bisa lama karna menumpuk di Queue, sebab program harus melakukan looping sebanyak 1jt kali sebelum mengeksuksi stack selesai.
// console.log('mulai');
// mhs.forEach(m => {
//   for (let i = 0; i < 1000000; i++) {
//     let date = Date();
//   }
//   console.log(m.nama)
// });
// console.log('selesai');


// * Asynchronous Callback Vanilla js
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404 ) {
//         error();
//       }
//     }
//   }
//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', result => {
//   const mhs = JSON.parse(result);
//   mhs.forEach(m => console.log(m.nama));
// } , () => {
  
// });
// console.log('selesai');



// * Asynchronous pake JQuery
console.log('mulai');

$.ajax({
  url: 'mahasiswa.json',
  success: (mhs) => {
    mhs.forEach(m => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  }
});

console.log('selesai');
