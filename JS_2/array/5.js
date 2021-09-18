function start() {
  // Array SPlice fungsinya menyisipkan array di suatu tempat
  // index yang paling terakhir
  const kegiatan = [
    {
      name: "beberes bengkel",
    },
    {
      name: "beberes taman",
    },
  ];
  kegiatan.push({
    name: "ngerjain mobil",
  });
  console.log("panjang dari array", kegiatan.length); // 1 => 2
  console.log(kegiatan);
  kegiatan.splice(1, 0, {
    name: "beberes kamar",
  });
  console.log(kegiatan);
}

start();
