// experimental

function start() {
  // Array At fungsinya mencari index yang ada dalam aray
  const kegiatan = [
    {
      name: "beberes bengkel",
    },
  ];
  kegiatan.push({
    name: "ngerjain mobil",
  });
  console.log("panjang dari array", kegiatan.length); // 1 => 2
  console.log(kegiatan.at(-1));
}

start();
