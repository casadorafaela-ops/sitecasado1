/* =========================================================
   EXPLORA O MUNDO DOS DINOSSAUROS
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MODO ESCURO
   ========================================================= */

const botaoTema = document.getElementById("botao-tema");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("modo-escuro");

        const escuro =
            document.body.classList.contains("modo-escuro");

        if (escuro) {

            botaoTema.textContent = "☀️";

            botaoTema.setAttribute(
                "aria-label",
                "Desativar modo escuro"
            );

            localStorage.setItem(
                "tema",
                "escuro"
            );

        } else {

            botaoTema.textContent = "🌙";

            botaoTema.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );

            localStorage.setItem(
                "tema",
                "claro"
            );

        }

    });

}


/* =========================================================
   2. CARREGAR TEMA SALVO
   ========================================================= */

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {

    document.body.classList.add("modo-escuro");

    if (botaoTema) {
        botaoTema.textContent = "☀️";

        botaoTema.setAttribute(
            "aria-label",
            "Desativar modo escuro"
        );
    }

}


/* =========================================================
   3. PESQUISA DOS DINOSSAUROS
   ========================================================= */

const campoPesquisa =
    document.getElementById("campo-pesquisa");

const cardsDinossauros =
    document.querySelectorAll(".card-dino");

const mensagemPesquisa =
    document.getElementById("mensagem-pesquisa");


if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "input",
        function () {

            const texto =
                campoPesquisa.value
                    .toLowerCase()
                    .trim();

            let encontrados = 0;

            cardsDinossauros.forEach(
                function (card) {

                    const conteudo =
                        card.textContent.toLowerCase();

                    if (conteudo.includes(texto)) {

                        card.style.display = "";

                        encontrados++;

                    } else {

                        card.style.display = "none";

                    }

                }
            );


            if (mensagemPesquisa) {

                if (encontrados === 0) {

                    mensagemPesquisa.style.display =
                        "block";

                } else {

                    mensagemPesquisa.style.display =
                        "none";

                }

            }

        }
    );

}


/* =========================================================
   4. FILTROS DOS DINOSSAUROS
   ========================================================= */

const botoesFiltro =
    document.querySelectorAll(".filtro");


botoesFiltro.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                /* Remove o ativo dos outros botões */

                botoesFiltro.forEach(
                    function (outroBotao) {

                        outroBotao.classList.remove(
                            "ativo"
                        );

                    }
                );

                /* Ativa o botão clicado */

                botao.classList.add("ativo");


                const filtro =
                    botao.getAttribute(
                        "data-filtro"
                    );


                let encontrados = 0;


                cardsDinossauros.forEach(
                    function (card) {

                        const tipo =
                            card.getAttribute(
                                "data-tipo"
                            );


                        if (
                            filtro === "todos" ||
                            tipo === filtro
                        ) {

                            card.style.display = "";

                            encontrados++;

                        } else {

                            card.style.display = "none";

                        }

                    }
                );


                if (mensagemPesquisa) {

                    if (encontrados === 0) {

                        mensagemPesquisa.style.display =
                            "block";

                    } else {

                        mensagemPesquisa.style.display =
                            "none";

                    }

                }


                /* Limpa a pesquisa */

                if (campoPesquisa) {
                    campoPesquisa.value = "";
                }

            }
        );

    }
);


/* =========================================================
   5. BOTÕES "SAIBA MAIS"
   ========================================================= */

const botoesCards =
    document.querySelectorAll(".botao-card");


botoesCards.forEach(
    function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const card =
                    botao.closest(".card-dino");


                if (!card) {
                    return;
                }


                const nome =
                    card.querySelector("h3");


                const descricao =
                    card.querySelector("p");


                if (!nome || !descricao) {
                    return;
                }


                alert(
                    "🦖 " +
                    nome.textContent +
                    "\n\n" +
                    descricao.textContent
                );

            }
        );

    }
);


/* =========================================================
   6. BOTÃO DO QUIZ
   ========================================================= */

const botaoQuiz =
    document.getElementById("botao-quiz");


if (botaoQuiz) {

    botaoQuiz.addEventListener(
        "click",
        function () {

            const resposta =
                prompt(
                    "🧠 DESAFIO DOS DINOSSAUROS\n\n" +
                    "Qual destes dinossauros era conhecido " +
                    "por possuir três chifres?\n\n" +
                    "A) Tiranossauro Rex\n" +
                    "B) Tricerátopo\n" +
                    "C) Velociraptor\n\n" +
                    "Digite A, B ou C:"
                );


            if (!resposta) {
                return;
            }


            const respostaFinal =
                resposta
                    .trim()
                    .toUpperCase();


            if (respostaFinal === "B") {

                alert(
                    "🎉 PARABÉNS!\n\n" +
                    "Você acertou!\n\n" +
                    "O Tricerátopo possuía três chifres."
                );

            } else {

                alert(
                    "❌ Não foi dessa vez!\n\n" +
                    "A resposta correta é B) Tricerátopo."
                );

            }

        }
    );

}


/* =========================================================
   7. FORMULÁRIO
   ========================================================= */

const formulario =
    document.getElementById(
        "formulario-contato"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome");

            const email =
                document.getElementById("email");

            const mensagem =
                document.getElementById("mensagem");


            if (
                !nome ||
                !email ||
                !mensagem
            ) {
                return;
            }


            if (
                nome.value.trim() === "" ||
                email.value.trim() === "" ||
                mensagem.value.trim() === ""
            ) {

                alert(
                    "⚠️ Preencha todos os campos."
                );

                return;

            }


            alert(
                "✅ Mensagem enviada!\n\n" +
                "Obrigado pelo contato, " +
                nome.value +
                "!"
            );


            formulario.reset();

        }
    );

}


/* =========================================================
   8. BOTÃO VOLTAR AO TOPO
   ========================================================= */

const botaoTopo =
    document.getElementById(
        "botao-topo"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!botaoTopo) {
            return;
        }


        if (window.scrollY > 500) {

            botaoTopo.classList.add(
                "visivel"
            );

        } else {

            botaoTopo.classList.remove(
                "visivel"
            );

        }

    }
);


if (botaoTopo) {

    botaoTopo.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   9. MENU COM ROLAGEM SUAVE
   ========================================================= */

const links =
    document.querySelectorAll(
        'a[href^="#"]'
    );


links.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const destino =
                    link.getAttribute("href");


                if (
                    !destino ||
                    destino === "#"
                ) {
                    return;
                }


                const elemento =
                    document.querySelector(
                        destino
                    );


                if (elemento) {

                    event.preventDefault();


                    elemento.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


/* =========================================================
   10. ANIMAÇÃO DOS CARDS
   ========================================================= */

const elementosAnimados =
    document.querySelectorAll(
        ".card-dino, " +
        ".curiosidade-card, " +
        ".periodo-card, " +
        ".estatistica"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "aparecer"
                        );


                        observador.unobserve(
                            entrada.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


elementosAnimados.forEach(
    function (elemento) {

        observador.observe(elemento);

    }
);


/* =========================================================
   11. EFEITO NO CABEÇALHO
   ========================================================= */

const cabecalho =
    document.querySelector(
        ".cabecalho"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!cabecalho) {
            return;
        }


        if (window.scrollY > 50) {

            cabecalho.classList.add(
                "rolando"
            );

        } else {

            cabecalho.classList.remove(
                "rolando"
            );

        }

    }
);


/* =========================================================
   12. ANO AUTOMÁTICO
   ========================================================= */

const ano =
    new Date().getFullYear();


const elementosAno =
    document.querySelectorAll(
        ".ano-atual"
    );


elementosAno.forEach(
    function (elemento) {

        elemento.textContent = ano;

    }
);


/* =========================================================
   13. MENSAGEM NO CONSOLE
   ========================================================= */

console.log(
    "🦖 Explora o Mundo dos Dinossauros"
);

console.log(
    "✅ JavaScript carregado corretamente!"
);

console.log(
    "📁 Arquivo: js/script.js"
);
