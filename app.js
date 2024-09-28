let container = document.getElementById('container');

function criaCartao(pergunta, resposta) {
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao); 

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao_conteudo_resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    container.appendChild(cartao); 
}


perguntas.forEach(p => {
    criaCartao(p.pergunta, p.resposta);
});