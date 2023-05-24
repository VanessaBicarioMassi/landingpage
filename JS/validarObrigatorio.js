function validarFormulario() {
    var inputs = document.querySelectorAll('input[required]');
    var camposVazios = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
        camposVazios.push(inputs[i].getAttribute('name'));
        }
    }

    if (camposVazios.length > 0) {
        alert('Os seguintes campos são obrigatórios: ' + camposVazios.join(', '));
        return false;
    }

    return true;
}
