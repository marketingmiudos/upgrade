document.addEventListener("DOMContentLoaded", () => {
  const precos = document.querySelectorAll(".price");
  let total = 0;

  precos.forEach(item => {
    // Extrai o texto "R$ 749,90", remove "R$" e troca vírgula por ponto
    const valorTexto = item.textContent.replace("R$", "").trim().replace(".", "").replace(",", ".");
    const valor = parseFloat(valorTexto);

    if (!isNaN(valor)) total += valor;
  });

  const totalElemento = document.getElementById("total");
  totalElemento.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
});
