function divisao(a, b) {
    return a / b;
}

const resultado = divisao(6, 2);

if (resultado === 3) {
    console.log("Teste passou!");
} else {
    console.error("Teste falhou!");
    process.exit(1);
}