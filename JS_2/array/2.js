function start() {
  // Array PUSH fungsinya menambahkan property dalam aray
  const kegiatan = [
    {
      name: "beberes bengkel",
    },
  ];
  kegiatan.push({
    name: "ngerjain mobil",
  });
  console.log("panjang dari array", kegiatan.length); // 1 => 2
  console.log(kegiatan);
}

start();
