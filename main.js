const form = document.getElementById('form-value');
const campoA = document.getElementById('campo-A')
const campoB = document.getElementById('campo-B')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const campoA = document.getElementById('campo-A')
    const campoB = document.getElementById('campo-B')
    const mensagemSucesso = document.getElementById('mensagem-resposta')
    
    if (campoB < campoA) {
        document.getElementById('mensagem-resposta').style.display = 'block'
    } else {
        document.getElementById('mensagem-error').style.display = 'block';
    }
})

console.log(form)