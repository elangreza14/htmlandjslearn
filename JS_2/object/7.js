function start() {
  // Object Freeza Key fungsinya buat mengfreeza key / property yang ada dalam object
  // ga bisa di otak atik
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
  inacos.tipe = "lab"; // tambah tipe
  console.log("1", inacos);
  Object.freeze(inacos); // freeze object yang ada
  delete inacos.tipe; // apus tipe
  console.log("2", inacos); // tipe tetap ada karena object
  // di freeze
}

start();
