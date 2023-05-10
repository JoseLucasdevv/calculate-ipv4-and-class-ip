const ip = " 192.168.1.100";

function calculateIpv4() {
  const arr = [128, 64, 32, 16, 8, 4, 2, 1];

  const result = calculateNumber(ip);
  const number = transferToNumber(result);
  const resultBinary = transferToBinary(number, arr);
  classIpv4(resultBinary);
}
function classIpv4(arrayBinary) {
  const stringBinary = arrayBinary.join("");
  if (stringBinary.startsWith("0")) {
    const { classA: maskClassA } = maskNetwork();
    const { classA: cidrClassA } = cidr();
    const addressNetwork = calcAddressNetwork(maskClassA);
    const addressBroadcast = calcAddressBroadcast(addressNetwork);

    console.log(
      `ip de Classe A pois o primeiro Bit é 0, o binário completo ${stringBinary} e sua mask é ${maskClassA.join(
        ""
      )} o CIDR é, ${cidrClassA} o endereço de rede é ${addressNetwork} o endereço de broadcast é ${addressBroadcast}`
    );
  }
  if (stringBinary.startsWith("10")) {
    const { classB: maskClassB } = maskNetwork();
    const { classB: cidrClassB } = cidr();
    const addressNetwork = calcAddressNetwork(maskClassB);
    const addressBroadcast = calcAddressBroadcast(addressNetwork);

    console.log(
      `ip de Classe B pois os primeiros Bits são 10,o binário completo ${stringBinary} e sua mask é ${maskClassB.join(
        ""
      )} o CIDR é, ${cidrClassB.join(
        ""
      )}, o endereço de rede é ${addressNetwork} o endereço de broadcast é ${addressBroadcast}`
    );
  }
  if (stringBinary.startsWith("110")) {
    const { classC: maskClassC } = maskNetwork();
    const { classC: cidrClassC } = cidr();
    const addressNetwork = calcAddressNetwork(maskClassC);
    const addressBroadcast = calcAddressBroadcast(addressNetwork);

    console.log(
      `ip de Classe C pois os primeiros Bits são 110,o binário completo ${stringBinary} e sua mask é ${maskClassC.join(
        ""
      )} o CIDR é, ${cidrClassC} o endereço de rede é ${addressNetwork} o endereço de broadcast é ${addressBroadcast}`
    );
  }
  if (stringBinary.startsWith("1110")) {
    console.log(
      `ip de Classe D pois os primeiros Bits são 1110,o binário completo ${stringBinary}`
    );
  }
  if (stringBinary.startsWith("11110")) {
    console.log(
      `ip de Classe E pois os primeiros Bits são 11110,o binário completo ${stringBinary}`
    );
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
function maskNetwork() {
  return {
    classA: ["255.", "0.", "0.", "0"],
    classB: ["255.", "255.", "0.", "0"],
    classC: ["255.", "255.", "255.", "0"],
  };
}

function cidr() {
  return {
    classA: "8 bits",
    classB: "16 bits",
    classC: "24 bits",
  };
}

function calcAddressNetwork(subMask) {
  const resultAddressNetwork = [];
  const ipArray = ip.split(".");
  const newSubmask = subMask.map((item) => {
    if (!item.endsWith(".")) {
      item += ".";
    }

    if (item.endsWith(".")) {
      return item.replace(".", "");
    }
  });
  for (let i = 0; i <= newSubmask.length; i++) {
    if (newSubmask[i] === "255") {
      resultAddressNetwork.push(ipArray[i]);
    }
    if (newSubmask[i] === "0") {
      resultAddressNetwork.push("0");
    }
  }
  return resultAddressNetwork.join(".");
}
function calcAddressBroadcast(addressNetwork) {
  return addressNetwork.replace("0", "255");
}

calculateIpv4();
