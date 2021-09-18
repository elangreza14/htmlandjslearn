function start() {
  // Array Concat fungsinya mengabungkan array dua array
  const kegiatan = [
    {
      name: "beberes bengkel",
    },
    {
      name: "beberes taman",
    },
  ];
  const kegiatan2 = [
    {
      name: "ngerjain mobil",
    },
  ];
  const newArray = kegiatan.concat(kegiatan2);
  console.log("panjang dari array", newArray.length); // 1 => 2
  console.log(newArray);
}

start();
