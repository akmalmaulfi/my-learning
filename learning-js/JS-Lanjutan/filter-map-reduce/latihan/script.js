// INI PAKE CARA SENDIRI
// // ambil semua elemen video
// const videos = Array.from(document.querySelectorAll("[data-duration]"));

// // pilih hanya javascript lanjutan
// const jsLanjut = videos.filter((a) =>
//   a.textContent.includes("JAVASCRIPT LANJUTAN")
// );
// // ambil durasi masing-masing video
// const durasi = jsLanjut.map((a) => a.getAttribute("data-duration"));
// // console.log(durasi);

// // ubah durasi menjadi integer, ubah menit menjadi detik
// const toInt = durasi.map((a) => parseInt(a));
// const toSecond = toInt.map((a) => a * 60);
// // console.log(toSecond);
// // jumlahkan semua detiknya
// const sumSec = toSecond.reduce((acc, cur) => acc + cur);
// // ubah formatnya jadi jam menit detik
// const jam = Math.round(sumSec / 3600);
// const menit = sumSec / 60;

// // simpan di dom
// const jumlahVideo = document.querySelector(".jumlah-video");
// const totalDurasi = document.querySelector(".total-durasi");
// jumlahVideo.innerHTML = jsLanjut.length;
// totalDurasi.innerHTML = `${jam} Jam ${menit} Menit ${sumSec} Detik `;

// INI PAKE CARA DARI WPU
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya "JAVASCRIPT LANJUTAN"
let jsLanjut = videos
  .filter((a) => a.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi dari masing-masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 di split menjadi -> [10, 30], lalu mengubah nilai dari array menjadi float dengan parseFloat
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di dom
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter((a) =>
  a.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pTotal = document.querySelector(".jumlah-video");
pTotal.textContent = `${jmlVideo} Video`;
console.log(jmlVideo);
