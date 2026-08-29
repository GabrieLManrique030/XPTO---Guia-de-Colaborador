function soma(a, b) {
    return a + b;
}

const resultado = soma(5, 3);

if (resultado === 8) {
    console.log("Teste passou!");
} else {
    console.error("Teste falhou!");
    process.exit(1);
}