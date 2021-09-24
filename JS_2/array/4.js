function start() {
  // Array POP fungsinya menghilangkan
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
  kegiatan.pop(); // MENGHILANGKAN YANG TERAKHIR
  console.log(kegiatan);
}

start();
