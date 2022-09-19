// 1. HTML FRAGMENTS
// const mhs = {
//   nama: "Akmal Maulfi",
//   umur: 20,
//   npm: 202010225032,
//   email: "akmalmaulfi@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.npm}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Akmal",
//     email: "akmalmaulfi@gmail.com",
//   },
//   {
//     nama: "Mega",
//     email: "megasepti@gmail.com",
//   },
//   {
//     nama: "Septi",
//     email: "septi@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;

// 3. Conditionals
// const lagu = {
//   judul: "Aku adalah",
//   penyanyi: "James",
//   feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// 4. Nested / HTML Fragment bersarang
const mhs = {
  nama: "Akmal Maulfi",
  semester: 5,
  mataKuliah: [
    "Analisa Numerik",
    "Etika Profesi",
    "Pemrogram Perangkat Bergerak",
    "Pembelajaran Mesin",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `<ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester : ${mhs.semester}</span><br><br>

  // Cara ke 1 : langsung eksekusi menggunakan Higher Order Function
  <ol>
    ${mhs.mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>

  // Cara ke 2 : menggunakan function
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
