document.addEventListener("DOMContentLoaded", function () {
  var encryptButton = document.getElementById("criptografar");
  var decryptButton = document.getElementById("descriptografar");
  var inputText = document.getElementById("inputText");

  var storedText = sessionStorage.getItem("inputText");
  if(storedText) {
    inputText.value = storedText;
  }

  if (encryptButton) {
    encryptButton.addEventListener("click", function (event) {
      event.preventDefault();
      encryptText();
    });
  }

  if (decryptButton) {
    decryptButton.addEventListener("click", function (event) {
      event.preventDefault();
      decryptText();
    });
  }
});

function encryptText() {
  var inputText = document.getElementById("inputText").value;

  if (/^[a-z ]+$/.test(inputText)) {
    var encryptedText = inputText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;

    sessionStorage.setItem("inputText", inputText);
  } else {
    alert("Por favor, insira apenas letras minúsculas, espaços e sem acentos.");
  }

  return false;
}

function decryptText() {
  var inputText = document.getElementById("inputText").value;

  if (/^[a-z ]+$/.test(inputText)) {
    var decryptedText = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;

    sessionStorage.setItem("inputText", inputText);
  } else {
    alert("Por favor, insira apenas letras minúsculas, espaços e sem acentos.");
  }

  return false;
}

function copyToClipboard() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
    return false;
  }
