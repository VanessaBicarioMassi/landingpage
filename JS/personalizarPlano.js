// Seleciona os elementos radio buttons
const radioButtons = document.querySelectorAll('input[name="qualidade"]');

// Adiciona um evento de mudança para cada radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener("change", handleRadioButtonChange);
});

// Função para lidar com a mudança de um radio button
function handleRadioButtonChange(event) {
  const selectedRadioButton = event.target;

  // Seleciona todos os radio buttons anteriores ao selecionado
  const previousRadioButtons = Array.from(radioButtons).slice(0, [...radioButtons].indexOf(selectedRadioButton));

  // Define o estado checked para os radio buttons anteriores
  previousRadioButtons.forEach(radioButton => {
    radioButton.checked = true;
  });
}
