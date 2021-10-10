// TASK
// satu fungsi untuk plindrom integer number

// input  outp
// 123
// 1246
// 12321
// 123421
// -934
// 5

// 123456789 => substring 1,len-2
//  2345678
//   34567

function polindromObes(s) {
  var base = s.toString();
  var len = base.length; // translate panjang dari x
  if (len < 2) {
    // panjangnya kurang dari 2
    // 1 huruf
    return true; // betul
  }
  //   console.log(s[len - 1]);
  if (base[0] != base[len - 1]) {
    // sama in index pertama sama index terakhir
    return false; // betul
  }
  var t = base.substr(1, len - 2); //
  return polindromObes(t); //
}

// 12345
// dua kali
// 12345678
// empat kali

function polindromApnan(x) {
  var numString = x.toString(); // dibuat string
  var points = []; // sebagai buffer
  for (var i = 0; i < numString.length / 2; i++) {
    // loop through
    // looping dari setengah panjang numString

    var inc = i;
    var dec = numString.length - i - 1;
    // sama in index pertama sama index terakhir
    if (numString[inc] == numString[dec]) {
      points.push("1");
      return true;
      // points kalo ada 1 semua berarti true
    } else {
      points.push("0");
      return false;
      // points kalo ada 0 semua berarti false
    }
  }
  if (points.includes("0")) {
    return false;
  } else {
    return true;
  }
}

// ketika kondisi true dia bakal check samapi pertenghan string / int

function polindromAfan(s) {
  //   const polindrom = [5, 4, 3, 1, 3, 3, 5];
  //console.log(polindrom)
  const base = s.toString();
  for (let i = 0; i < base.length; i++) {
    // loop through
    // semua posisi polindron
    const pos = base.length - i - 1;
    const awal = base[i];
    const dibalik = base[pos];
    if (awal != dibalik) {
      console.log("Polindrom");
      return false; // break the loop with return false
    }
  }
  return true;
}

function main() {
  //   const res = polindromAfan(123421);
  //   console.log(res);
  [123, 1246, 12321, 123421, -934].map((x) => {
    const res = polindromAfan(x);
    console.log(res);
  });
}

main();
