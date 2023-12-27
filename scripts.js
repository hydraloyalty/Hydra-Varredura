// JavaScript Document

document.addEventListener('DOMContentLoaded', function () {
    const inputLIMITE = document.getElementById('inputLIMITE');
    const limiteValue = document.getElementById('valor');

    inputLIMITE.addEventListener('input', function() {
        let inputValue = this.value;
        
        // Substitui todos os caracteres que não são números, ponto ou vírgula por uma string vazia
        inputValue = inputValue.replace(/[^0-9.,]/g, '');
        
        // Atualiza o valor do campo input com a nova versão filtrada
        this.value = inputValue;

        limiteValue.textContent = inputValue; // Atualiza o valor exibido em "limite-valor"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputSIM = document.getElementById('sim');
    const inputNAO = document.getElementById('nao');
    const campoCNPJ = document.getElementById('CNPJ');

    // Função para exibir o campo CNPJ
    function showCNPJ() {
        campoCNPJ.style.display = 'flex';
    }

    // Função para ocultar o campo CNPJ
    function hideCNPJ() {
        campoCNPJ.style.display = 'none';
    }

    // Evento de escuta para os inputs do tipo radio
    inputSIM.addEventListener('change', function() {
        if (this.checked) {
            showCNPJ(); // Exibir campo CNPJ se SIM estiver selecionado
        }
    });

    inputNAO.addEventListener('change', function() {
        if (this.checked) {
            hideCNPJ(); // Ocultar campo CNPJ se NÃO estiver selecionado
        }
    });

    // Verifica o estado inicial dos inputs ao carregar a página
    if (inputSIM.checked) {
        showCNPJ(); // Exibir campo CNPJ se SIM estiver inicialmente selecionado
    } else if (inputNAO.checked) {
        hideCNPJ(); // Ocultar campo CNPJ se NÃO estiver inicialmente selecionado
    }

    // Adiciona um evento para ocultar o campo CNPJ ao clicar em NÃO e exibir ao clicar em SIM
    inputNAO.addEventListener('click', function() {
        if (this.checked) {
            hideCNPJ(); // Oculta o campo CNPJ ao clicar na opção NÃO
        }
    });

    inputSIM.addEventListener('click', function() {
        if (this.checked) {
            showCNPJ(); // Exibe o campo CNPJ ao clicar na opção SIM
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputCPF = document.getElementById('inputCPF');

    // Função para formatar o CPF
    function formatCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove tudo que não for dígito
        cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2'); // Coloca ponto após os 3 primeiros dígitos
        cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto após os próximos 3 dígitos
        cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Coloca hífen antes do último dígito
        return cpf;
    }

    // Evento de escuta para o input de CPF
    inputCPF.addEventListener('input', function() {
        let cpfValue = this.value;

        // Formata o valor do CPF
        cpfValue = formatCPF(cpfValue);

        // Limita o tamanho máximo do CPF para 14 caracteres
        if (cpfValue.length > 14) {
            cpfValue = cpfValue.slice(0, 14);
        }

        // Atualiza o valor do campo com a versão formatada e limitada
        this.value = cpfValue;
    });

    // Evento para permitir somente números, ponto e hífen no campo de CPF
    inputCPF.addEventListener('keypress', function(event) {
        const allowedChars = /[0-9.-]/; // Define os caracteres permitidos
        const inputChar = String.fromCharCode(event.charCode);
        let formattedCPF = formatCPF(this.value + inputChar);

        // Verifica se o total de caracteres permitidos foi alcançado
        if (formattedCPF.length > 14) {
            event.preventDefault(); // Impede a inserção de mais caracteres
        }

        // Verifica se o caractere inserido é permitido
        if (!allowedChars.test(inputChar)) {
            event.preventDefault(); // Impede a inserção do caractere no campo
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputCNPJ = document.getElementById('inputCNPJ');

    // Função para formatar o CNPJ
    function formatCNPJ(cnpj) {
        cnpj = cnpj.replace(/\D/g, ''); // Remove tudo que não for dígito
        cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto após os 2 primeiros dígitos
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto após os próximos 3 dígitos
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4'); // Coloca barra após os próximos 3 dígitos
        cnpj = cnpj.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5'); // Coloca hífen antes dos 2 últimos dígitos
        return cnpj;
    }

    // Evento de escuta para o input de CNPJ
    inputCNPJ.addEventListener('input', function() {
        let cnpjValue = this.value;

        // Formata o valor do CNPJ
        cnpjValue = formatCNPJ(cnpjValue);

        // Limita o tamanho máximo do CNPJ para 18 caracteres
        if (cnpjValue.length > 18) {
            cnpjValue = cnpjValue.slice(0, 18);
        }

        // Atualiza o valor do campo com a versão formatada e limitada
        this.value = cnpjValue;
    });

    // Evento para permitir somente números, ponto, barra e hífen no campo de CNPJ
    inputCNPJ.addEventListener('keypress', function(event) {
        const allowedChars = /[0-9./-]/; // Define os caracteres permitidos
        const inputChar = String.fromCharCode(event.charCode);
        let formattedCNPJ = formatCNPJ(this.value + inputChar);

        // Verifica se o total de caracteres permitidos foi alcançado
        if (formattedCNPJ.length > 18) {
            event.preventDefault(); // Impede a inserção de mais caracteres
        }

        // Verifica se o caractere inserido é permitido
        if (!allowedChars.test(inputChar)) {
            event.preventDefault(); // Impede a inserção do caractere no campo
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const inputAgencia = document.querySelector('input[placeholder="0000"]');
    const inputConta = document.querySelector('input[placeholder="000000-1"]');

    // Evento para permitir somente números e o símbolo '-' no campo de Agência
    inputAgencia.addEventListener('keypress', function(event) {
        const allowedChars = /[0-9-]/; // Define os caracteres permitidos
        const inputChar = String.fromCharCode(event.charCode);

        // Verifica se o caractere inserido é permitido
        if (!allowedChars.test(inputChar)) {
            event.preventDefault(); // Impede a inserção do caractere no campo
        }
    });

    // Evento para permitir somente números e o símbolo '-' no campo de Conta
    inputConta.addEventListener('keypress', function(event) {
        const allowedChars = /[0-9-]/; // Define os caracteres permitidos
        const inputChar = String.fromCharCode(event.charCode);

        // Verifica se o caractere inserido é permitido
        if (!allowedChars.test(inputChar)) {
            event.preventDefault(); // Impede a inserção do caractere no campo
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // ...outros códigos...

    var botaoImprimir = document.getElementById('botao-imprimir');
    var secaoConfig = document.querySelector('.config'); // Certifique-se de que o seletor corresponda à sua classe de configuração

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', function () {
            // Adiciona uma classe para ocultar a seção de configuração
            secaoConfig.classList.add('ocultar-na-impressao');

            // Dispara a impressão
            window.print();

            // Espera um pouco antes de remover a classe (por exemplo, 500 milissegundos)
            setTimeout(function () {
                secaoConfig.classList.remove('ocultar-na-impressao');
            }, 500);
        });
    }
});