function Palindromo(){
    let palavra = document.querySelector("#texto");
    let texto = palavra.value;
    texto = texto.split(" ").join("").normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase();
    let palindromo = "";
    
    for(let i = texto.length - 1; i >= 0; i--) {
       palindromo += texto[i];
    }
    if (texto == palindromo) {
       alert("O texto digitado " + texto + " é um Palindromo");
    } else {
       alert("O texto digitado " + texto + " não é um Palindromo");
    }
}