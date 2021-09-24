// TASK
// satu fungsi untuk membalikan integer number

// input  output
// -21    0 kalo minus balikin 0 udah terpenuhi
// 124    421
// 537    735
// 200    002 / 2

function reverseInteger(x) {
  // bisa di parsing dalam bentuk string
  let mergeNum = "";
  let result = 0;

  if (typeof x != "number") {
    console.log(result);
    return result;
  }

  const base = x.toString();
  if (base.includes("-") == true) {
    console.log(result);
    return result;
  }
  const splitVal = base.split("");

  for (let i = 0; i < splitVal.length; i++) {
    const element = splitVal[splitVal.length - i - 1];
    mergeNum = mergeNum + element;
  }
  result = parseInt(mergeNum);
  console.log(result);
  return result;
}

reverseInteger(-11234213);
reverseInteger(12122); // [1,2,1,2,2]
reverseInteger(5424323); // [1,2,1,2,2]
reverseInteger(200); // [1,2,1,2,2]
reverseInteger("cek"); // [1,2,1,2,2]
reverseInteger(false); // [1,2,1,2,2]
