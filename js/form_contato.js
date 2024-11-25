//DB Sheet Formulário de Contato

document.querySelector('form').addEventListener('submit', function(event) {


    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;
    const resposta = document.querySelector('input[name="resposta"]:checked').value;
    
    // Dados a serem enviados para o SheetDB
    const dataToSend = {
        data: [{
            nome: nome,
            email: email,
            data: data,
            celular: celular,
            mensagem: mensagem,
            resposta: resposta
        }]
    };
    
    // Envio da requisição POST para o SheetDB
    fetch('https://sheetdb.io/api/v1/szly7fwwcnw7d', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
        alert("Formulário enviado com sucesso!");
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert("Erro ao enviar o formulário.");
    });
});
