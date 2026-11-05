
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarCodigo() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let codigo = "";

    for (let i = 0; i < 5; i++) {
        codigo += letras.charAt(
            Math.floor(Math.random() * letras.length)
        );
    }

    const numero = gerarNumeroAleatorio(100, 999);

    return `${codigo}-${numero}`;
}

console.log("=== Gerador de Código ===");
console.log("Código gerado:", gerarCodigo());
console.log("Número aleatório:", gerarNumeroAleatorio(1, 100));
