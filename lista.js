let numeros = [];

document.getElementById('insertBtn').onclick = () => {
    let valorInserido = parseInt(document.getElementById('numberInput').value);
    if (!isNaN(valorInserido)) numeros.push(valorInserido);
    document.getElementById('numberInput').value = '';
    document.getElementById('original').textContent = numeros.join(',');
};

document.getElementById('sortBtn').onclick = () => {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
}
}
}
    document.getElementById('ordenar').textContent = numeros.join(',');
};
