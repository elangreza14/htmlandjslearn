function start() {
  // Object Values fungsinya buat tau semua value yang
  // ada dari masing2 keys
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
  // di translate menjadi array of value
  // dan valunya dari keys object tersebut
  const result = Object.values(inacos);
  console.log(result);
}

start();
