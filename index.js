function calculateIpv4() {
  const ip = "192.168.0.1";
  const arr = [128, 64, 32, 16, 8, 4, 2, 1];
  const result = calculateNumber(ip);
  const number = transferToNumber(result);
  const resultBinary = transferToBinary(number, arr);
  classIpv4(resultBinary);
}
function classIpv4(arrayBinary) {
  const stringBinary = arrayBinary.join("");
  if (stringBinary.startsWith("0")) {
    console.log("ip de Classe A pois o primeiro Bit é 0");
  }
  if (stringBinary.startsWith("10")) {
    console.log("ip de Classe B pois os primeiros Bits são 10");
  }
  if (stringBinary.startsWith("110")) {
    console.log("ip de Classe C pois os primeiros Bits são 110");
  }
  if (stringBinary.startsWith("1110")) {
    console.log("ip de Classe D pois os primeiros Bits são 1110");
  }
  if (stringBinary.startsWith("11110")) {
    console.log("ip de Classe E pois os primeiros Bits são 11110");
  }
}

function transferToBinary(number, arr) {
  const binary = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] <= number) {
      number = number - arr[i];
      binary.push("1");
    } else {
      binary.push("0");
    }
  }
  return binary;
}

function transferToNumber(string) {
  const number = Number(string);
  return number;
}

function calculateNumber(ip) {
  for (let i = 0; i <= ip.length; i++) {
    if (ip[i] === ".") {
      const result = ip.slice(0, i);
      return result;
    }
  }
}

calculateIpv4();
