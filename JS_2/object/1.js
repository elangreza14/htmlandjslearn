function start() {
  // buat object inacos yang terdiri dari divisi dan koordinator,
  // masing masing memiliki keys yang berbeda beda
  const mekanik = {
    name: "Mekanik Team",
    jumlah: 3,
    fokus: "gardan mobil",
  };
  const kordas = {
    name: "Kordas ",
    jumlah: 1,
    fokus: "leading inacos team",
  };
  const inacos = {
    leader: [kordas],
    divisi: [mekanik],
    kegiatan: {
      minggu: [
        {
          name: "beberes bengkel",
        },
        {
          name: "beberes lab atas",
        },
      ],
    },
  };
  console.log(inacos);
  console.log(inacos.divisi[0].name);
  //   console.log(inacos.divisi[1].jumlah);
  //   console.log(inacos.divisi[2].fokus);
  console.log(inacos.leader[0].name);
  console.log(inacos.kegiatan.minggu[1].name);
  console.log(inacos.kegiatan.minggu[0].name);
  //   console.log("Leader fokus: ", inacos.leader[0].fokus);
  //   console.log("Mekanik jumlah: ", inacos.divisi[0].jumlah);
}

start();
