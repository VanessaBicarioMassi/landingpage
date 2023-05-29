let calcularTotal = () => {
  let select1 = document.getElementById('select1').value;
  let select2 = document.getElementById('select2').value;

  let resultado = select1 * select2;

  document.getElementById('valor').value = resultado;
  console.log(resultado);
};

let botao = document.querySelector('.calcula-total');
botao.addEventListener('click', calcularTotal);
