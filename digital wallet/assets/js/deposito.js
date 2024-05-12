$(document).ready(function() {
    $('#deposito').submit(function(event) {
        var valor = parseInt($('#valor').val());
        if (valor <= 0) {
            alert('El valor a depositar debe ser mayor que 0');
            return false;
        }
        var balanceActual = parseInt(localStorage.getItem('balance-amount')) || 0;
        var nuevoBalance = balanceActual + valor;
        localStorage.setItem('balance-amount', nuevoBalance);
        $('#balance-amount').text('CLP ' + nuevoBalance);
        $('#mensaje').text('Depósito realizado');
        $('#valor').val('');
        return false;
    });
});
