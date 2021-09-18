function start() {
  // Object Object Keys fungsinya buat tau semua key yang ada dalam object
  const inacos = {
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

  // awal bentuknya itu object
  // di translate menjadi array of string
  // dan valunya dari keys object tersebut
  const result = Object.keys(inacos);
  console.log(result);
}

start();
