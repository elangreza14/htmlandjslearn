function start() {
  //

  const inacos = {
    a: 1,
    b: 2,
  };

  for (var key in inacos) {
    console.log(key + " -> " + inacos[key]);
  }
}

start();
