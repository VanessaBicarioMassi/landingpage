let calcularTotal = () => {
  let select1 = document.getElementById('select1').value;
  let select2 = document.getElementById('select2').value;

  let resultado = select1 * select2;
  let resultadoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado);

  document.getElementById('valor').value = resultadoFormatado;
  console.log(resultadoFormatado);
};

let botao = document.querySelector('.calcula-total');
botao.addEventListener('click', calcularTotal);
