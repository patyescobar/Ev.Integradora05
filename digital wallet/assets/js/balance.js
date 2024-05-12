function depositarCantidad(cantidad) {
    var balanceActual = localStorage.getItem('balance');

    if (balanceActual) {
        balanceActual = parseInt(balanceActual);
    } else {
        balanceActual = 0;
     }

    balanceActual += parseInt(cantidad);
    localStorage.setItem('balance', balanceActual);

    $('.balance-amount').text('CLP ' + balanceActual);
    }
