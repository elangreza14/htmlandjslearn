function start() {
  // Object Values fungsinya buat tau semua key dan value yang
  // ada dari masing2 keys
  // value tadi bakal dibuat jadi array yang lebih kecil
  const inacos = {
    leader: 1,
    kegiatan: "masak",
  };

  // awal bentuknya itu object
  // di translate menjadi array of value
  // dan valunya dari keys object tersebut
  const result = Object.entries(inacos);
  console.log(result);
}

start();
