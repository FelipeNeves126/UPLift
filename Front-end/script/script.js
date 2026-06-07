
const btnMenu = document.getElementById('menu-btn');
const menuMobile = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', () => {
menuMobile.classList.toggle('aberto');

if (menuMobile.classList.contains('aberto')) {
    btnMenu.innerText = '✕';
} else {
    btnMenu.innerText = '☰';
}
});

document.addEventListener('click', (evento) => {
    const menuMobile = document.getElementById('menu-mobile');
    const btnMenu = document.getElementById('menu-btn');
    if (menuMobile && btnMenu && menuMobile.classList.contains('aberto')) {   
        if (!menuMobile.contains(evento.target) && !btnMenu.contains(evento.target)) {
            menuMobile.classList.remove('aberto');
            btnMenu.innerText = '☰';
        }
    }
});

const btnAvatar = document.getElementById('btn-avatar');

const btnIniciarCadastro = document.getElementById('btn-iniciar-cadastro');
const modalTipoCadastro = document.getElementById('modal-tipo-cadastro');

if (btnIniciarCadastro) {
    btnIniciarCadastro.addEventListener('click', (evento) => {
        evento.preventDefault();
        if (usuarioLogado) {
            document.getElementById('modal-doacao').classList.add('ativo');
        } else {
            document.getElementById('modal-tipo-cadastro').classList.add('ativo');
        }
    });
}

const btnDeslogar = document.getElementById('btn-deslogar');

if (btnDeslogar) {
    btnDeslogar.addEventListener('click', () => {
        usuarioLogado = false;

        document.getElementById('modal-perfil').classList.remove('ativo');

        const btnAvatar = document.getElementById('btn-avatar');
        btnAvatar.innerHTML = `
            <svg viewBox="0 0 24 24" fill="#888888" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
        `;

        document.getElementById('btn-iniciar-cadastro').innerText = 'Quero fazer parte';
        document.getElementById('btn-funcionamento').innerText = 'Como Funciona';

        document.getElementById('bloco-visitante').style.display = 'block';
        document.getElementById('bloco-usuario-logado').style.display = 'none';
        document.getElementById('loja-preview').style.display = 'none';

        alert('Você saiu da sua conta.');
    });
}

const btnAcessarLoja = document.getElementById('btn-acessar-loja');
const modalLojaManutencao = document.getElementById('modal-loja-manutencao');

if (btnAcessarLoja) {
    btnAcessarLoja.addEventListener('click', (evento) => {
        evento.preventDefault();
        modalLojaManutencao.classList.add('ativo');
    });
}

const btnEscolhaDoador = document.getElementById('btn-escolha-doador');
const btnEscolhaEmpresa = document.getElementById('btn-escolha-empresa');


btnEscolhaDoador.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

if(btnEscolhaDoador) {
    btnEscolhaDoador.addEventListener('click', () => {
        window.location.href = 'cadastro-doador.html';
    });
}

if(btnEscolhaEmpresa) {
    btnEscolhaEmpresa.addEventListener('click', () => {
        window.location.href = 'cadastro-empresa.html'
    });
}
btnEscolhaEmpresa.addEventListener('click', () => {
    modalTipoCadastro.classList.remove('ativo');
});

const linkMenuCadastro = document.getElementById('link-menu-cadastro');

if (linkMenuCadastro) {
    linkMenuCadastro.addEventListener('click', (evento) => {
        evento.preventDefault();

        const menuMobile = document.getElementById('menu-mobile');
        const btnMenu = document.getElementById('menu-btn');
        menuMobile.classList.remove('aberto');
        btnMenu.innerHTML = `☰`;

        modalTipoCadastro.classList.add('ativo');
    });
};

const todosBotoesFechar = document.querySelectorAll('.js-fechar-modal');

todosBotoesFechar.forEach(botao => {
    botao.addEventListener('click', function() {

        const modalPai = this.closest('.js-modal-overlay');
        if(modalPai){
            modalPai.classList.remove('ativo');
        }
    });
});

const todosModais = document.querySelectorAll('.js-modal-overlay');

todosModais.forEach(modal => {
    modal.addEventListener('click', function(evento) {
        if (evento.target === this) {
            this.classList.remove('ativo');
        }
    });
});

const modalLogin = document.getElementById('modal-login');

const linkMenuLogin = document.getElementById('link-menu-login');
if (linkMenuLogin) {
    linkMenuLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        
        const menuMobile = document.getElementById('menu-mobile');
        const btnMenu = document.getElementById('menu-btn');
        menuMobile.classList.remove('aberto');
        btnMenu.innerText = '☰';
        
        modalLogin.classList.add('ativo');
    });
}

const linkAbrirLogin = document.getElementById('link-abrir-login');
if (linkAbrirLogin) {
    linkAbrirLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        modalTipoCadastro.classList.remove('ativo'); 
        modalLogin.classList.add('ativo'); 
    });
}

const linkAbrirCadastroPeloLogin = document.getElementById('link-abrir-cadastro-pelo-login');
if (linkAbrirCadastroPeloLogin) {
    linkAbrirCadastroPeloLogin.addEventListener('click', (evento) => {
        evento.preventDefault();
        modalLogin.classList.remove('ativo'); 
        modalTipoCadastro.classList.add('ativo'); 
    });
}    

const btnVerRelatorio = document.getElementById('btn-ver-relatorio');
const linkMenuImpacto = document.getElementById('link-menu-impacto');

if (btnVerRelatorio) {
    btnVerRelatorio.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        window.location.href = 'relatorio-impacto.html';
    });
}

if (linkMenuImpacto) {
    linkMenuImpacto.addEventListener('click', (evento) => {
        evento.preventDefault();
        window.location.href = 'relatorio-impacto.html';
    });
}

const linkMenuFuncionamento = document.getElementById('link-menu-funcionamento');
const btnInicioFuncionamento = document.getElementById('btn-funcionamento');
const btnVerMecanica = document.querySelector('.link-saiba-mais.btn-centralizado');

function irParaFuncionamento(evento) {
    evento.preventDefault();
    window.location.href = 'funcionamento.html';
}

if (linkMenuFuncionamento) {
    linkMenuFuncionamento.addEventListener('click', irParaFuncionamento);
}

if (btnInicioFuncionamento) {
    btnInicioFuncionamento.addEventListener('click', irParaFuncionamento);
}

if (btnVerMecanica) {
    btnVerMecanica.addEventListener('click', irParaFuncionamento);
}

let usuarioLogado = false;

if (btnAvatar) {
    btnAvatar.addEventListener('click', () => {
        if (usuarioLogado) {
            document.getElementById('modal-perfil').classList.add('ativo');
        } else {
            document.getElementById('modal-login').classList.add('ativo');
        }
    });
}

const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        const emailDigitado = document.getElementById('login-email').value;
        const senhaDigitada = document.getElementById('login-senha').value;

        if (emailDigitado === 'seu@email.com' && senhaDigitada === '123senha') {
            
            usuarioLogado = true;

            document.getElementById('modal-login').classList.remove('ativo');

            btnAvatar.innerHTML = `
                <div style="background-color: #2e7d32; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.95rem;">
                    FN
                </div>
            `;

            document.getElementById('btn-iniciar-cadastro').innerText = 'Fazer doação';
            document.getElementById('btn-funcionamento').innerText = 'Relatório Pessoal';

            document.getElementById('bloco-visitante').style.display = 'none';
            document.getElementById('bloco-usuario-logado').style.display = 'block';
            document.getElementById('loja-preview').style.display = 'block';

            formLogin.reset();
            alert('Acesso liberado! Bem-vindo de volta.');
            
        } else {
            alert('E-mail ou senha incorretos. Dica: use seu@email.com e 123senha');
        }
    });
}

const btnHeroSecundario = document.getElementById('btn-funcionamento');
const btnRelatorioBaixo = document.querySelector('#bloco-usuario-logado .link-saiba-mais');

if (btnHeroSecundario) {
    btnHeroSecundario.removeEventListener('click', irParaFuncionamento); 
    
    btnHeroSecundario.addEventListener('click', (evento) => {
        evento.preventDefault();
        if (usuarioLogado) {
            window.location.href = 'relatorio-pessoal.html';
        } else {
            window.location.href = 'funcionamento.html';
        }
    });
}

if (btnRelatorioBaixo) {
    btnRelatorioBaixo.addEventListener('click', (evento) => {
        evento.preventDefault();
        window.location.href = 'relatorio-pessoal.html';
    });
}

const inputValor = document.getElementById('doacao-valor');
const displayPontos = document.getElementById('pontos-calculados');
const formDoacao = document.getElementById('form-doacao');
const modalDoacao = document.getElementById('modal-doacao');

if (inputValor) {
    inputValor.addEventListener('input', () => {
        const valorReal = parseFloat(inputValor.value);
        
        if (!isNaN(valorReal) && valorReal > 0) {
            const pontos = Math.floor(valorReal * 10);
            displayPontos.innerText = pontos.toLocaleString('pt-BR') + ' pts';
        } else {
            displayPontos.innerText = '0 pts';
        }
    });
}

if (formDoacao) {
    formDoacao.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        
        const valorReal = parseFloat(inputValor.value);
        const causaEscolhida = document.getElementById('doacao-causa').value;
        
        const emailDoador = "felipe@email.com";

        const pacoteDeDados = {
            email: emailDoador,
            valor: valorReal,
            causa: causaEscolhida
        };

        try {
            const respostaServidor = await fetch('http://localhost:8080/api/doar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pacoteDeDados) 
            });

            const resultado = await respostaServidor.json();

            if (resultado.status === 'sucesso') {
                alert(`🎉 ${resultado.mensagem} Você ganhou ${resultado.pontosGanhos} pts!`);
                const displayPontosPerfil = document.querySelector('.modal-pontos');
                
                if (displayPontosPerfil) {
                    let pontosAtuais = parseInt(displayPontosPerfil.innerText.replace(' pts', ''));
                    
                    if (isNaN(pontosAtuais)) pontosAtuais = 0;
                    
                    let pontosAtualizados = pontosAtuais + resultado.pontosGanhos;
                    
                    displayPontosPerfil.innerText = `${pontosAtualizados} pts`;
                }
                
                formDoacao.reset();
                displayPontos.innerText = '0 pts';
                modalDoacao.classList.remove('ativo');
            }

        } catch (erro) {
            console.error("Erro na comunicação:", erro);
            alert("Erro: O servidor C++ está desligado ou inacessível no momento.");
        }
    });
}

