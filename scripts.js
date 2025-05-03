// Aqui você pode colocar funcionalidades extras, como scroll suave ou tema dinâmico

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

  document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Captura os dados
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Armazena localmente no navegador (apenas exemplo)
    const contato = { nome, email, mensagem };
    localStorage.setItem('contato', JSON.stringify(contato));
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    this.reset();
  });
  
