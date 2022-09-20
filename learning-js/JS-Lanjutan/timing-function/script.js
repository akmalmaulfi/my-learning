// ^ Timing Event / Timing Function
// function tampilkanPesan() {
//     console.log('Hello');
// }

// ^ SetTimeOut
// ? setTImeOut butuh 2 parameter, 1 utk fungsinyam 2 utk durasinya dalam ms
// setTimeout(tampilkanPesan, 3000);

// ? atau bisa langsung dengan anonymous function
// setTimeout(() => {
//     console.log('hello world');
// }, 2000);

// ? memberhentikan ditengah waktu dengan tombol
// const detik = 3000;
// const tes = setTimeout(() => {
//     console.log(`Berhasil menunggu selama ${detik} ms`);
// }, detik)

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearTimeout(tes);
//     console.log(`Waktu dihentikan`);
// })


// ^ SetInterval()
// * melakukan sesuatu berulang ulang dengan interval tertentu
// const interval = setInterval(function () {
//     console.log('ok')
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearInterval(interval);
//     console.log('Interval telah berhenti');
// });







// * Program hitung mundur
const tanggalTujuan = new Date('Sep 21, 2022 12:25:00').getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;
    
    const hari =  Math.floor( selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);
    
    const teks = document.getElementById('teks');
    teks.innerHTML = `Waktu anda tinggal : ${hari} hari ${jam} jam ${menit} menit ${detik} detik`;

    if ( selisih <= 0 ) {
        clearInterval(hitungMundur);
        teks.innerHTML = 'Waktu anda telah HABIS!!!';
    }
}, 1000);
