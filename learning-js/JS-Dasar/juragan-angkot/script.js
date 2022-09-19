var penumpang = ["Akmal", "Maulfi", "Mega"];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    return penumpang.push(namaPenumpang);
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log("Nama penumpang " + namaPenumpang + " sudah ada.");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    console.log("Angkot kosong dan tidak mungkin ada penumpang turun");
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (namaPenumpang == penumpang[i]) {
        penumpang[i] = undefined;
        console.log(
          "Penumpang dengan nama " + namaPenumpang + " sudah diturunkan."
        );
        return penumpang;
      } else if (namaPenumpang != penumpang[i] - 1) {
        console.log("Tidak ada penumpang dengan nama " + namaPenumpang);

        return penumpang;
      }
    }
  }
};
