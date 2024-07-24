document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const peso = parseFloat(document.getElementById('peso').value.replace(',','.'));
        const altura = parseFloat(document.getElementById('altura').value.replace(',','.'));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(2);

        // Exibe o IMC calculado
        alert(`IMC: ${imc}`);
    });
});