function start() {
  // Object Delete Key fungsinya buat menghapus key / property yang ada dalam object
  let inacos = {
    leader: [
      {
        name: "Kordas ",
        jumlah: 1,
        fokus: "leading inacos team",
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
  console.log("1", inacos);
  delete inacos.tipe;
  console.log("2", inacos);
}

start();
