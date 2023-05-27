function updateTotal() {
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');
    var valor = document.getElementById('valor');
  
    var selectedValue1 = parseInt(select1.value);
    var selectedValue2 = parseFloat(select2.value);
    var total = selectedValue1 * selectedValue2;
  
    valor.value = 'R$ ' + total.toFixed(2);
  }
  