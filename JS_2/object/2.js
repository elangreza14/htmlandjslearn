function start() {
  // Object Add Key fungsinya buat menambahkan key / property baru

  let inacos = {
    leader: [
      {
        name: "Kordas ",
        jumlah: 1,
        fokus: "leading inacos team",
      },
    ],
    divisi: [
      {
        name: "Mekanik Team",
        jumlah: 3,
        fokus: "gardan mobil",
      },
    ],
    kegiatan: {
      minggu: [
        {
          name: "beberes bengkel",
        },
      ],
    },
  };
  inacos.tipe = "lab";
  console.log(inacos);
}

start();
